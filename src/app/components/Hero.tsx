"use client";
import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-purple-900 text-white  ">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 text-center md:py-24 z-10">
        <div className="max-w-7xl">
          <div className="mb-6 inline-block">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full md:text-sm text-xs">
              Published: January 14, 2026 | Last Updated: January 14, 2026
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
            Outsourced Tier-1 & Tier-2 IT Support | Microsoft 365, Cloud & VPN Services USA
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90 sm:text-xl md:text-2xl">
            Comprehensive remote IT support solutions delivering expert help desk services, technical escalation
            management, Microsoft 365 administration, cloud infrastructure support, and secure VPN implementation for
            US businesses. Our dedicated teams provide 24/7 coverage with rapid response times and proven expertise
            across diverse industries.
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5.0</span>
            <span className="text-blue-200">(2,847 reviews)</span>
          </div>

          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Request Free Consultation
          </Link>
        </div>
      </div>

      {/* Wave */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div> */}
    </section>
  );
}
