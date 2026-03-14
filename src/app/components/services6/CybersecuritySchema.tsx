import Script from "next/script";
import { cybersecuritySchemas } from "../../schemas/cybersecuritySchema";

export default function CyberSecuritySchema() {
  return (
    <>
      {cybersecuritySchemas.map((schema, i) => (
        <Script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),

          }}
        />
      ))}
    </>
  );
}
