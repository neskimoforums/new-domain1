import Script from "next/script";

const contactPageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.gladiusesport.com/services/contact-us/#product",
    name: "Gladius eSport IT Support Contact",
    alternateName: "Managed IT Services Support & Business Contact Resource",
    image: ["https://www.gladiusesport.com/assets/img/contact-us.webp"],
    description:
      "Contact Gladius eSport to connect with Managed IT Services specialists for cybersecurity support, cloud infrastructure assistance, and business IT solutions.",
    url: "https://www.gladiusesport.com/contact-us/",
    brand: {
      "@type": "Brand",
      name: "Gladius eSport",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Businesses & IT Service Clients",
      name: "Companies Seeking IT Support",
      description:
        "Organizations and business owners looking for professional managed IT services, cybersecurity protection, and cloud infrastructure support.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "865214",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "199",
      highPrice: "4999",
      priceCurrency: "USD",
      offerCount: "4",
      availability: "https://schema.org/InStock",
      url: "https://www.gladiusesport.com/contact-us/",
    },
  },
];

export default function ContactUsPageSchema() {
  return (
    <>
      {contactPageSchemas.map((schema, index) => (
        <Script
          key={`contact-page-schema-${index}`}
          id={`contact-page-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}