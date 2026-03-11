'use client';
import { useState } from 'react';
import { faqs } from '../../data/cybersecurity';
import { FaqItem } from './Faq-item';
import { SectionHeading } from './Heading';

export function FaqSection() { 
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="relative z-10 py-14 md:py-20">
      <div className="container-shell">
        <SectionHeading
          tag="Frequently Asked Questions"
          title="10 Expert"
          highlight="FAQs"
          lead="Authoritative answers to the most common questions about cybersecurity services."
        />

        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.q}
              index={index}
              question={faq.q}
              answer={faq.a}
              isOpen={activeIndex === index}  
              onToggle={() => toggleFaq(index)}  
            />
          ))}
        </div>
      </div>
    </section>
  );
}