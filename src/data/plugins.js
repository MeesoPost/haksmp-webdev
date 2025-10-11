// Plugin/Mod data for Hak SMP Season 4
export const plugins = [
  {
    id: 1,
    name: "Plugin Name 1",
    description: "description",
    version: "1.0.0",
    required: true,
    downloadUrl: "#",
    author: "Plugin Author 1",
    inNormalPack: true,
    inPerformancePack: true,
  },
  {
    id: 2,
    name: "Plugin Name 2",
    description: "description",
    version: "2.5.3",
    required: false,
    downloadUrl: "#",
    author: "Plugin Author 2",
    inNormalPack: true,
    inPerformancePack: false,
  },
  {
    id: 3,
    name: "Plugin Name 3",
    description: "description",
    version: "3.0.0",
    required: true,
    downloadUrl: "#",
    author: "Plugin Author 3",
    inNormalPack: true,
    inPerformancePack: true,
  },
];

export const modpacks = [
  {
    id: "enhanced",
    name: "Enhanced",
    version: "4.0.0",
    downloadUrl: "#",
    type: "enhanced",
  },
  {
    id: "lite",
    name: "Lite",
    version: "4.0.0",
    downloadUrl: "#",
    type: "lite",
  },
];

export const modpackInfo = {
  name: "Hak SMP Season 4 Modpack",
  version: "4.0.0",
  minecraftVersion: "1.20.1",
  forgeVersion: "47.2.0",
  totalMods: plugins.length,
  lastUpdated: "2024-10-11",
};
