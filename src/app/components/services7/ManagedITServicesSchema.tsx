import Script from "next/script";
import { managedITServicesSchemas } from "../../schemas/managedITSchema";

export default function ManagedITServicesSchema() {
  return (
    <>
      {(managedITServicesSchemas as any[]).map((schema, i) => (
        <Script
          key={`schema-script-${i}`}
          id={`json-ld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}