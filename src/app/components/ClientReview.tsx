"use client";
import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface Review {
  initials: string;
  name: string;
  title: string;
  company: string;
  rating: number;
  review: string;
  gradient: string;
}

const ClientReviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews: Review[] = [
    {
      initials: 'JM',
      name: 'James Mitchell',
      title: 'CTO',
      company: 'TechVenture Inc.',
      rating: 5.0,
      review: "Outstanding Tier-2 support! Resolved our Azure migration issues in hours. Their team's expertise in Microsoft 365 is unmatched. Highly recommend for enterprise solutions.",
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      initials: 'SR',
      name: 'Sarah Rodriguez',
      title: 'IT Director',
      company: 'HealthFirst Medical',
      rating: 5.0,
      review: '24/7 help desk support has been a game-changer. Response times under 10 minutes, knowledgeable staff, and seamless ticket management. Perfect for healthcare compliance needs.',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      initials: 'DK',
      name: 'David Kim',
      title: 'CEO',
      company: 'CloudSync Solutions',
      rating: 4.9,
      review: "VPN setup for our remote teams was flawless. Network security audit identified vulnerabilities we didn't know existed. Professional, thorough, and cost-effective.",
      gradient: 'from-green-400 to-green-600'
    },
    {
      initials: 'MP',
      name: 'Maria Patel',
      title: 'VP Operations',
      company: 'RetailMax Corp',
      rating: 5.0,
      review: 'Migrated 500+ users to Microsoft 365 without a single hiccup. Their project management and technical execution exceeded all expectations. Worth every penny!',
      gradient: 'from-red-400 to-red-600'
    },
    {
      initials: 'RJ',
      name: 'Robert Johnson',
      title: 'CFO',
      company: 'FinServe Group',
      rating: 4.9,
      review: 'Cloud infrastructure support has reduced our downtime by 90%. Their proactive monitoring catches issues before they impact business. Exceptional ROI!',
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      initials: 'LC',
      name: 'Lisa Chen',
      title: 'COO',
      company: 'EduTech Academy',
      rating: 5.0,
      review: 'Supporting 2000+ students and staff across multiple campuses. Their Tier-1 help desk handles everything from printer issues to complex network problems. Reliable and responsive!',
      gradient: 'from-pink-400 to-pink-600'
    },
    {
      initials: 'TW',
      name: 'Thomas Wilson',
      title: 'CIO',
      company: 'Manufacturing Plus',
      rating: 4.8,
      review: 'Tier-2 escalation services are phenomenal. Complex server issues resolved with precision. Their technical knowledge and communication skills are top-tier.',
      gradient: 'from-indigo-400 to-indigo-600'
    },
    {
      initials: 'AN',
      name: 'Amanda Nelson',
      title: 'Director IT',
      company: 'LegalPro Services',
      rating: 5.0,
      review: 'Security-focused VPN implementation for our law firm. They understand compliance requirements and deliver solutions that meet strict regulatory standards. Highly professional!',
      gradient: 'from-teal-400 to-teal-600'
    },
    {
      initials: 'KB',
      name: 'Kevin Brown',
      title: 'Founder',
      company: 'StartupHub',
      rating: 4.9,
      review: 'As a startup, we needed scalable IT support. They grew with us from 10 to 150 employees. Flexible pricing and exceptional service quality. Best decision we made!',
      gradient: 'from-orange-400 to-orange-600'
    },
    {
      initials: 'EM',
      name: 'Emily Martinez',
      title: 'Head of IT',
      company: 'Global Logistics Co',
      rating: 5.0,
      review: "Multi-location support across 15 states. Their remote capabilities and consistent service delivery are outstanding. They've become an integral part of our IT strategy.",
      gradient: 'from-cyan-400 to-cyan-600'
    }
  ];

  // Infinite scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when halfway through (seamless loop)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* Scrolling Reviews Container */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-6"
            style={{ width: 'max-content' }}
          >
            {/* Render reviews twice for seamless infinite loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-2xl min-w-[350px] max-w-[350px] hover:scale-105 transition-transform duration-300"
              >
                {/* Avatar & Info */}
                <div className="flex items-center mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${review.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                    {review.initials}
                  </div>
                  <div className="ml-4 min-w-0">
                    <h4 className="font-bold text-gray-800 truncate">{review.name}</h4>
                    <p className="text-sm text-gray-600 truncate">
                      {review.title}, {review.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 font-semibold">{review.rating}</span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  {review.review}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 text-center">
          <p className="text-white text-lg font-semibold mb-2">
            Join 500+ satisfied businesses
          </p>
          <p className="text-blue-100">
            Average rating: 4.9/5.0 from 2,847 verified reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;