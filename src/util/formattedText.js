export default function formattedText(text, limit = 15) {
  if (!text || text.length < limit) return text;

  return `${text.substring(0, limit)}...`;
}
