import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export default function parseMarkdown(markdownContent) {
  const { data, content } = matter(markdownContent);
  const htmlContent = md.render(content);
  return { metadata: data, htmlContent };
}
