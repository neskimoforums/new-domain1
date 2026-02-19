import React from "react";
import Link from "next/link";

const PHONE_NUMBER_DISPLAY = "1-332-219-9100";
const PHONE_TEL = "+13322199100";
const EMAIL = "info@ms365support.com";

export default function ContactCtaSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Ready to Transform Your Business?
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
          Get started with a free consultation and discover how our Microsoft
          365 expertise can optimize your operations, enhance security, and
          drive productivity.
        </p>

        <div className="mb-8 flex flex-col justify-center gap-4 md:flex-row">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-700 transition hover:bg-gray-100"
          >
            📞 Call: {PHONE_NUMBER_DISPLAY}
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-blue-800 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-900"
          >
            ✉️ Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
