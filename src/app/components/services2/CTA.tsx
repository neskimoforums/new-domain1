import Link from 'next/link';
import React from 'react';

const CTA = () => {
  return (
    <section className="py-0 px-0">
      <div className="min-w-full mx-auto text-center bg-gradient-to-br from-blue-400 to-indigo-700 p-16 shadow-2xl text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready for Advanced Technical Support?</h2>
          <p className="text-blue-100 mb-10 text-lg">
            Let our expert Tier-2 team handle your complex infrastructure challenges and drive operational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-8 py-3 cursor-pointer rounded-lg font-medium hover:bg-blue-50 transition transform hover:scale-105">
              Request Consultation
            </Link>
            <button className="bg-transparent border-2 cursor-pointer border-white backdrop-blur-sm px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;