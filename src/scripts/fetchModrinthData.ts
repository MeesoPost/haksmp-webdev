import { writeFileSync } from "fs";
import { resolve } from "path";

interface ModrinthProject {
  id: string;
  name: string;
  description: string;
}

interface ModrinthVersion {
  id: string;
  version_number: string;
  game_versions: string[];
  loaders: string[];
  files: Array<{
    filename: string;
    url: string;
    primary: boolean;
  }>;
}

interface ModrinthModpackVersion {
  id: string;
  version_number: string;
  name: string;
  files: Array<{
    path: string;
    hashes: {
      sha1: string;
      sha512: string;
    };
    downloads: number;
    fileSize: number;
  }>;
  dependencies: Array<{
    project_id: string;
    dependency_type: string;
  }>;
}

interface Plugin {
  id: string;
  name: string;
  description: string;
  version: string;
  required: boolean;
  downloadUrl: string;
  author: string;
  inNormalPack: boolean;
}

interface ModpackVersion {
  id: string;
  name: string;
  version: string;
  gameVersion: string;
  modrinthUrl: string;
  downloads: number;
  publishedDate: string;
}

interface ModpackInfo {
  name: string;
  version: string;
  minecraftVersion: string;
  forgeVersion: string;
  totalMods: number;
  lastUpdated: string;
}

const MODPACK_ID = "A1fB3OWk";
const API_BASE = "https://api.modrinth.com/v2";

async function fetchModrinthData(): Promise<void> {
  try {
    console.log("Fetching modpack data from Modrinth...");

    // Fetch modpack project info
    const modpackRes = await fetch(`${API_BASE}/project/${MODPACK_ID}`);
    if (!modpackRes.ok) {
      throw new Error(`Failed to fetch modpack: ${modpackRes.statusText}`);
    }
    const modpackProject = (await modpackRes.json()) as any;

    // Get list of version IDs
    const versionIds = modpackProject.versions;
    if (!versionIds || versionIds.length === 0) {
      throw new Error("No versions found for modpack");
    }

    // Fetch the latest version for mod details
    const latestVersionRes = await fetch(
      `${API_BASE}/version/${versionIds[0]}`
    );
    if (!latestVersionRes.ok) {
      throw new Error(
        `Failed to fetch version ${versionIds[0]}: ${latestVersionRes.statusText}`
      );
    }
    const latestVersion = (await latestVersionRes.json()) as any;

    const lastUpdated = new Date().toISOString().split("T")[0];

    console.log(`Found modpack: ${modpackProject.title}`);
    console.log(`Latest version: ${latestVersion.version_number}`);
    console.log(`Mods in modpack: ${latestVersion.dependencies.length}`);

    // Fetch all mod details from latest version
    const plugins: Plugin[] = [];
    let gameVersion = latestVersion.game_versions[0] || "Unknown";
    let loaderVersion = (latestVersion.loaders[0] || "Fabric").toUpperCase();

    for (let i = 0; i < latestVersion.dependencies.length; i++) {
      const dep = latestVersion.dependencies[i];

      try {
        // Fetch mod project info
        const modRes = await fetch(`${API_BASE}/project/${dep.project_id}`);
        if (!modRes.ok) {
          console.warn(`Failed to fetch mod ${dep.project_id}`);
          continue;
        }
        const mod = (await modRes.json()) as any;

        // Fetch the specific version of the mod used in the modpack
        const modVersionRes = await fetch(
          `${API_BASE}/version/${dep.version_id}`
        );
        if (!modVersionRes.ok) {
          console.warn(
            `Failed to fetch version ${dep.version_id} for ${mod.title}`
          );
          continue;
        }
        const modVersion = (await modVersionRes.json()) as any;

        const downloadFile = modVersion.files.find((f: any) => f.primary) ||
          modVersion.files[0] || {
            url: "#",
            filename: "unknown",
          };

        plugins.push({
          id: dep.project_id,
          name: mod.title,
          description: mod.description || "No description available",
          version: modVersion.version_number,
          required: dep.dependency_type === "required",
          downloadUrl: downloadFile.url || "#",
          author: "Modrinth",
          inNormalPack: true,
        });

        // Rate limiting - be nice to the API
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error) {
        console.warn(
          `Error processing mod ${dep.project_id}:`,
          error instanceof Error ? error.message : String(error)
        );
      }
    }

    // Fetch latest modpack version (version with most downloads)
    const modpacks: ModpackVersion[] = [];
    try {
      let latestModpack: any = null;
      let maxDownloads = -1;

      // Check all versions to find the one with most downloads
      for (let i = 0; i < versionIds.length; i++) {
        try {
          const versionRes = await fetch(`${API_BASE}/version/${versionIds[i]}`);
          if (!versionRes.ok) {
            console.warn(`Failed to fetch version ${versionIds[i]}`);
            continue;
          }
          const version = (await versionRes.json()) as any;

          if ((version.downloads || 0) > maxDownloads) {
            maxDownloads = version.downloads || 0;
            latestModpack = version;
          }

          // Rate limiting
          await new Promise((resolve) => setTimeout(resolve, 100));
        } catch (error) {
          console.warn(`Error processing version ${versionIds[i]}`);
        }
      }

      if (latestModpack) {
        modpacks.push({
          id: latestModpack.id,
          name: modpackProject.title,
          version: latestModpack.version_number,
          gameVersion: latestModpack.game_versions[0] || "Unknown",
          modrinthUrl: `https://modrinth.com/modpack/${MODPACK_ID}`,
          downloads: latestModpack.downloads || 0,
          publishedDate: latestModpack.date_published
            ? new Date(latestModpack.date_published).toLocaleDateString(
                "nl-NL",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )
            : "Unknown",
        });

        console.log(
          `Latest version: ${latestModpack.version_number} (${latestModpack.downloads} downloads)`
        );
        console.log(`Published: ${modpacks[0].publishedDate}`);
      }
    } catch (error) {
      console.warn(
        "Error processing modpack versions:",
        error instanceof Error ? error.message : String(error)
      );
    }

    // Create modpack info from latest version (for mod details)
    const modpackInfo: ModpackInfo = {
      name: modpackProject.title,
      version: latestVersion.version_number,
      minecraftVersion: gameVersion,
      forgeVersion: loaderVersion,
      totalMods: plugins.length,
      lastUpdated,
    };

    // Generate the plugins.js file
    const outputPath = resolve("src/data/plugins.js");
    const content = `// Auto-generated from Modrinth API on ${lastUpdated}
// Modpack ID: ${MODPACK_ID}
// DO NOT EDIT MANUALLY - changes will be overwritten on next build

export const plugins = ${JSON.stringify(plugins, null, 2)};

export const modpacks = ${JSON.stringify(modpacks, null, 2)};

export const modpackInfo = ${JSON.stringify(modpackInfo, null, 2)};
`;

    writeFileSync(outputPath, content);
    console.log(`✓ Generated ${outputPath} with ${plugins.length} mods`);
  } catch (error) {
    console.error(
      "Error fetching Modrinth data:",
      error instanceof Error ? error.message : String(error)
    );
    process.exit(1);
  }
}

fetchModrinthData();
