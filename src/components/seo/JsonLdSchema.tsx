import React from "react";

interface JsonLdSchemaProps {
  schema: Record<string, any> | Record<string, any>[];
  id?: string;
}

export default function JsonLdSchema({ schema, id }: JsonLdSchemaProps) {
  if (!schema) return null;
  const jsonString = JSON.stringify(schema);

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

