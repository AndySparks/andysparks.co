// Local JSON-LD types for the schema.org shapes this site emits. schema-dts is
// not a dependency and we don't need its full universe — these cover Person,
// WebSite, Article, BreadcrumbList, Event, ProfessionalService, FAQPage, and
// Review. New schemas should be added here so the JsonLd component stays
// strongly typed.

type Thing = {
  "@context"?: string;
  "@type": string;
  [field: string]: SchemaValue | undefined;
};

export type SchemaValue =
  | string
  | number
  | boolean
  | Thing
  | SchemaValue[]
  | null;

// Root JSON-LD nodes always carry @context. Nested Things may omit it.
export type JsonLdSchema = Thing & { "@context": string };
