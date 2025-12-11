interface WikiTableOfContentsProps {
  content: string;
}

interface Heading {
  level: number;
  text: string;
  id: string;
}

export default function WikiTableOfContents({
  content,
}: WikiTableOfContentsProps) {
  // Extract headings from markdown content
  const headings: Heading[] = [];
  const lines = content.split("\n");

  lines.forEach((line) => {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      // Only include h2 and h3 (level 2-3) in TOC
      if (level >= 2 && level <= 3) {
        const text = match[2];
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");

        headings.push({ level, text, id });
      }
    }
  });

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="wiki-toc" aria-label="Table of contents">
      <div className="wiki-toc-content">
        <h3 className="wiki-toc-title">On this page</h3>
        <nav className="wiki-toc-nav">
          <ul className="wiki-toc-list">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={`wiki-toc-item wiki-toc-level-${heading.level}`}
              >
                <a href={`#${heading.id}`} className="wiki-toc-link">
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
