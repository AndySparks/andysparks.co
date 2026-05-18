import type { JsonLdSchema } from "@/lib/jsonld";

type JsonLdProps = {
  data: JsonLdSchema;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
