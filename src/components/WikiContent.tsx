interface WikiContentProps {
  content: string;
}

export default function WikiContent({ content }: WikiContentProps) {
  // Convert markdown to HTML
  let html = content;

  // Preserve code blocks - replace with placeholder
  const codeBlocks: string[] = [];
  html = html.replace(/```[\s\S]*?```/g, (match) => {
    const index = codeBlocks.length;
    codeBlocks.push(match);
    return `__CODE_BLOCK_${index}__`;
  });

  // Headings (in order: h1, h2, h3 to avoid issues)
  html = html.replace(/^# (.*?)$/gm, '<h1 class="wiki-heading-1">$1</h1>');
  html = html.replace(/^## (.*?)$/gm, '<h2 class="wiki-heading-2">$1</h2>');
  html = html.replace(/^### (.*?)$/gm, '<h3 class="wiki-heading-3">$1</h3>');

  // Bold and italic (bold first to avoid conflicts)
  html = html.replace(/\*\*([^\*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^\*]+)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" class="wiki-link">$1</a>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="wiki-inline-code">$1</code>');

  // Lists - match consecutive lines starting with - or *
  const listRegex = /^(\s*[-*+] .+)(\n\s*[-*+] .+)*/gm;
  html = html.replace(listRegex, (match) => {
    const items = match.split(/\n/).filter(line => line.trim());
    const listItems = items
      .map(item => {
        const text = item.replace(/^\s*[-*+]\s+/, '');
        return `<li class="wiki-list-item">${text}</li>`;
      })
      .join('');
    return `<ul class="wiki-list">${listItems}</ul>`;
  });

  // Paragraphs - split by double newlines and wrap non-block elements
  const blocks = html.split(/\n\n+/);
  html = blocks.map((block) => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (trimmed.match(/^<[h|u]/)) return trimmed;
    if (trimmed.match(/^__CODE_BLOCK_/)) return trimmed;
    return `<p class="wiki-paragraph">${trimmed}</p>`;
  }).join('\n');

  // Restore code blocks
  codeBlocks.forEach((block, index) => {
    const codeContent = block
      .replace(/^```\w*\n/, '')
      .replace(/\n```$/, '')
      .trim();
    const language = block.match(/^```(\w+)/)?.[1] || '';
    const codeHtml = `<pre class="wiki-code-block"><code class="wiki-code language-${language}">${escapeHtml(codeContent)}</code></pre>`;
    html = html.replace(`__CODE_BLOCK_${index}__`, codeHtml);
  });

  return (
    <div
      className="wiki-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
