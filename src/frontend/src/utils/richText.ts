const ALLOWED_TAGS = new Set([
  "B",
  "STRONG",
  "I",
  "EM",
  "U",
  "P",
  "BR",
  "UL",
  "OL",
  "LI",
  "SPAN",
  "DIV"
]);

export function sanitizeRichText(input: string): string {
  if (!input) return "";
  const parser = new DOMParser();
  const doc = parser.parseFromString(input, "text/html");
  const nodes = doc.body.querySelectorAll("*");

  nodes.forEach((node) => {
    if (!ALLOWED_TAGS.has(node.tagName)) {
      const parent = node.parentNode;
      while (node.firstChild) {
        parent?.insertBefore(node.firstChild, node);
      }
      parent?.removeChild(node);
      return;
    }

    [...node.attributes].forEach((attr) => {
      if (attr.name !== "style") {
        node.removeAttribute(attr.name);
      }
    });
  });

  return doc.body.innerHTML.trim();
}

export function plainTextFromRichText(input: string): string {
  if (!input) return "";
  const parser = new DOMParser();
  const doc = parser.parseFromString(input, "text/html");
  return (doc.body.textContent ?? "").trim();
}
