import { useState } from "react";
import { getAllWikiPages } from "../data/wiki-structure";

export default function WikiSearch() {
  const [query, setQuery] = useState("");
  const allPages = getAllWikiPages();

  const filteredPages = allPages.filter((page) => {
    const searchTerm = query.toLowerCase();
    return (
      page.title.toLowerCase().includes(searchTerm) ||
      page.description.toLowerCase().includes(searchTerm) ||
      page.category.toLowerCase().includes(searchTerm)
    );
  });

  const hasResults = query.length > 0;

  return (
    <div className="wiki-search-container">
      <div className="wiki-search-box">
        <input
          type="search"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="wiki-search-input"
          aria-label="Search wiki documentation"
        />
        <span className="wiki-search-icon" aria-hidden="true">
          🔍
        </span>
      </div>

      {hasResults && (
        <div className="wiki-search-results">
          {filteredPages.length > 0 ? (
            <div className="wiki-search-results-list">
              <p className="wiki-search-count">
                Found {filteredPages.length} result{filteredPages.length !== 1 ? "s" : ""}
              </p>
              <ul className="wiki-search-items">
                {filteredPages.map((page) => (
                  <li key={page.slug} className="wiki-search-item">
                    <a
                      href={`/wiki/${page.slug}`}
                      className="wiki-search-item-link"
                    >
                      <div className="wiki-search-item-title">
                        {page.title}
                      </div>
                      <div className="wiki-search-item-description">
                        {page.description}
                      </div>
                      <span className="wiki-search-item-category">
                        {page.category}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="wiki-search-no-results">
              <p>No results found for "{query}"</p>
              <p className="wiki-search-hint">Try different keywords</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
