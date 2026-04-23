/**
 * Injecte un objet JSON-LD dans le <head> / <body> sous forme de
 * <script type="application/ld+json"> pour les rich snippets Google.
 *
 * Utilisation :
 *   <JsonLd data={getOrganizationSchema()} />
 *   <JsonLd data={[schema1, schema2]} />  // plusieurs schemas sur une page
 */

type JsonLdData = Record<string, unknown> | Record<string, unknown>[];

export function JsonLd({ data }: { data: JsonLdData }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
