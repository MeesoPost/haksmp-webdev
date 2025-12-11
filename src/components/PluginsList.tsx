import {
  Document,
  Heading,
  Paragraph,
  PageHeader,
  PageContent,
  Link,
} from "@utrecht/component-library-react";
import { plugins, modpacks, modpackInfo } from "../data/plugins.js";

export default function PluginsList() {
  return (
    <div className="utrecht-wrapper">
      <Document>
        <PageHeader>
          <Heading level={1} className="page-title">
            Mods & Plugins
          </Heading>
          <Paragraph lead>
            Alle mods en plugins die we draaien op Hak SMP Season 4.
          </Paragraph>
        </PageHeader>

        <PageContent>
          {/* Modpack Info Section */}
          <section className="modpack-info">
            <Heading level={2} className="modpack-name-heading">
              {modpackInfo.name}
            </Heading>

            <div className="utrecht-data-list modpack-details">
              <div className="utrecht-data-list-item">
                <div className="utrecht-data-list-key">Modpack versie</div>
                <div className="utrecht-data-list-value">
                  {modpackInfo.version}
                </div>
              </div>
              <div className="utrecht-data-list-item">
                <div className="utrecht-data-list-key">Minecraft versie</div>
                <div className="utrecht-data-list-value">
                  {modpackInfo.minecraftVersion}
                </div>
              </div>
              <div className="utrecht-data-list-item">
                <div className="utrecht-data-list-key">Forge versie</div>
                <div className="utrecht-data-list-value">
                  {modpackInfo.forgeVersion}
                </div>
              </div>
              <div className="utrecht-data-list-item">
                <div className="utrecht-data-list-key">Aantal mods</div>
                <div className="utrecht-data-list-value">
                  {modpackInfo.totalMods}
                </div>
              </div>
              <div className="utrecht-data-list-item">
                <div className="utrecht-data-list-key">Laatst bijgewerkt</div>
                <div className="utrecht-data-list-value">
                  {modpackInfo.lastUpdated}
                </div>
              </div>
            </div>
          </section>

          {/* Download Section */}
          <Heading level={3}>Download Modpack</Heading>

          <section className="download-section">
            <Paragraph className="download-description">
              Download hier de modpack met alle mods en plugins die je hieronder
              kan zien. instructies vind je in de{" "}
              <Link href="#" className="discord-link">
                Discord
              </Link>
              .
            </Paragraph>

            <div className="button-group">
              {modpacks.map((modpack) => (
                <div key={modpack.id} className="download-item">
                  <button
                    type="button"
                    className="btn-discord btn-download btn-download--enhanced"
                  >
                    <svg
                      className="download-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7,10 12,15 17,10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span className="button-content">
                      <span className="button-title">Download Modpack</span>
                    </span>
                  </button>
                  <span className="version-badge utrecht-badge utrecht-badge--info">
                    v{modpack.version}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Plugins List Section */}
          <section className="plugins-list">
            <Heading level={2}>Alle mods en plugins</Heading>


            <div className="plugins-table">
              <table className="utrecht-table">
                <caption className="utrecht-table__caption">
                  Hier staan alle mods en plugins
                </caption>
                <thead className="utrecht-table__header">
                  <tr className="utrecht-table__row">
                    <th className="utrecht-table__header-cell" scope="col">
                      Mod/Plugin
                    </th>
                    <th className="utrecht-table__header-cell" scope="col">
                      Beschrijving
                    </th>
                    <th className="utrecht-table__header-cell" scope="col">
                      Versie
                    </th>
                    <th className="utrecht-table__header-cell" scope="col">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="utrecht-table__body">
                  {plugins.map((plugin) => (
                    <tr key={plugin.id} className="utrecht-table__row">
                      <th
                        className="utrecht-table__header-cell plugin-name"
                        scope="row"
                      >
                        {plugin.name}
                        <div className="plugin-author">{plugin.author}</div>
                      </th>
                      <td className="utrecht-table__cell">
                        <Paragraph className="plugin-description">
                          {plugin.description}
                        </Paragraph>
                      </td>
                      <td className="utrecht-table__cell">
                        <code className="version-code utrecht-code">
                          {plugin.version}
                        </code>
                      </td>
                      <td className="utrecht-table__cell">
                        {plugin.required ? (
                          <span className="utrecht-badge utrecht-badge--danger">
                            Verplicht
                          </span>
                        ) : (
                          <span className="utrecht-badge utrecht-badge--neutral">
                            Optioneel
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </PageContent>
      </Document>
    </div>
  );
}
