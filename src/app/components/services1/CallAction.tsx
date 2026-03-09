import React from "react";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "95%+", label: "First-Call Resolution" },
  { value: "<15min", label: "Average Response Time" },
  { value: "24/7/365", label: "Support Availability" },
];

export default function ContactCtaSection() {
  return (
    <section
      id="contact"
      className="py-20 text-white bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your IT Support?
        </h2>
        <p className="text-xl mb-8">
          Join 2,800+ satisfied businesses that trust us with their Tier-1 help desk needs
        </p>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold mb-2">{s.value}</p>
                <p className="text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="tel:+16465364302"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 inline-block"
          >
            📞 Call: +1 (646) 536-4302
          </a>

          <a
            href="mailto:support@techsupportpro.com"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition inline-block"
          >
            ✉️ Email Us
          </a>
        </div>

        <p className="text-sm opacity-90">
          🎁 Limited Time: Get your first month at 50% off • No long-term contracts • Free consultation
        </p>
      </div>
    </section>
  );
}
