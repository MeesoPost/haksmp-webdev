import { Link } from "@utrecht/component-library-react";
import { getWikiCategories, getWikiPagesByCategory } from "../data/wiki-structure";

interface WikiSidebarProps {
  currentSlug?: string;
}

export default function WikiSidebar({ currentSlug }: WikiSidebarProps) {
  const categories = getWikiCategories();

  return (
    <nav className="wiki-sidebar" aria-label="Wiki navigation">
      <div className="wiki-sidebar-content">
        <div className="wiki-sidebar-header">
          <h3 className="wiki-sidebar-title">Documentation</h3>
        </div>

        {categories.map((category) => {
          const pages = getWikiPagesByCategory(category);
          return (
            <div key={category} className="wiki-category">
              <h4 className="wiki-category-title">{category}</h4>
              <ul className="wiki-page-list">
                {pages.map((page) => (
                  <li
                    key={page.slug}
                    className={`wiki-page-item ${
                      currentSlug === page.slug ? "active" : ""
                    }`}
                  >
                    <Link
                      href={`/wiki/${page.slug}`}
                      className="wiki-page-link"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
