import { caseStudies } from '../../data/cybersecurity';
import { CaseStudyCard } from './Case-study';
import { SectionHeading } from './Heading';

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative z-10 py-14 md:py-20">
      <div className="container-shell">
        <SectionHeading
          tag="Real-World Evidence"
          title="10 Cybersecurity"
          highlight="Case Studies"
          lead="Documented examples of cybersecurity service deployments, outcomes, and lessons learned across industries."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((item) => (
            <CaseStudyCard key={item.num} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}