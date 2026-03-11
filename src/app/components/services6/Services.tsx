import { services } from '../../data/cybersecurity';
import { SectionHeading } from './Heading';
import { ServiceCard } from './Service-card';

export function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-14 md:py-20">
      <div className="container-shell">
        <SectionHeading
          tag="Core Coverage"
          title="20 Essential"
          highlight="Cybersecurity Services"
          lead="Each service is defined with its core role, key responsibilities, and required professional skills — structured for clarity and authority."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service:any) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}