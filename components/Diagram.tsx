import { diagrams } from "@/content/diagrams";

/** Schéma SVG statique (pipelines et architectures). */
export function Diagram({ id }: { id: string }) {
  const d = diagrams[id];
  if (!d) return null;
  const titleId = `${id}-t`;
  return (
    <svg viewBox={d.viewBox} role="img" aria-labelledby={titleId}>
      <title id={titleId}>{d.title}</title>
      <g dangerouslySetInnerHTML={{ __html: d.body }} />
    </svg>
  );
}
