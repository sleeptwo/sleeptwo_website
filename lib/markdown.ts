function processInline(text: string): string {
  // Bold
  text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  // Links
  text = text.replace(
    /\[(.+?)\]\((.+?)\)/g,
    '<a href="$2" class="prose-link">$1</a>'
  );
  return text;
}

export function markdownToHtml(markdown: string): string {
  const blocks = markdown.trim().split(/\n\n+/);
  return blocks
    .map((block) => {
      block = block.trim();
      if (!block) return "";
      if (block.startsWith("## ")) {
        return `<h2>${processInline(block.slice(3))}</h2>`;
      }
      if (block.startsWith("# ")) {
        return `<h1>${processInline(block.slice(2))}</h1>`;
      }
      // Join multi-line paragraphs
      const lines = block
        .split("\n")
        .map((l) => l.trim())
        .join(" ");
      return `<p>${processInline(lines)}</p>`;
    })
    .join("\n");
}
