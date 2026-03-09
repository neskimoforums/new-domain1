"use client";
import React, { useState } from 'react';
import { 
  Heart, 
  DollarSign, 
  GraduationCap, 
  Factory, 
  ShoppingCart,
  Building2,
  Truck,
  Globe
} from 'lucide-react';

interface Industry {
  id: number;
  icon: React.ReactNode;
  name: string;
  color: string;
  bgColor: string;
}

const Industries = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const industries: Industry[] = [
    {
      id: 1,
      icon: <Heart className="w-10 h-10" />,
      name: 'Healthcare',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      id: 2,
      icon: <DollarSign className="w-10 h-10" />,
      name: 'Finance',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      icon: <GraduationCap className="w-10 h-10" />,
      name: 'Education',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 4,
      icon: <Factory className="w-10 h-10" />,
      name: 'Manufacturing',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      id: 5,
      icon: <ShoppingCart className="w-10 h-10" />,
      name: 'Retail',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 6,
      icon: <Building2 className="w-10 h-10" />,
      name: 'Real Estate',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 7,
      icon: <Truck className="w-10 h-10" />,
      name: 'Logistics',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 8,
      icon: <Globe className="w-10 h-10" />,
      name: 'Technology',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-50'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering specialized IT support across diverse sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onMouseEnter={() => setHoveredId(industry.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Icon Container */}
              <div className={`inline-flex items-center justify-center w-20 h-20 ${industry.bgColor} rounded-2xl mb-4 transition-transform duration-300 ${
                hoveredId === industry.id ? 'scale-110' : 'scale-100'
              }`}>
                <div className={`${industry.color} transition-transform duration-300 ${
                  hoveredId === industry.id ? 'scale-110' : 'scale-100'
                }`}>
                  {industry.icon}
                </div>
              </div>

              {/* Industry Name */}
              <h4 className="font-bold text-lg text-gray-800">
                {industry.name}
              </h4>

              {/* Hover Indicator */}
              <div className={`mt-3 h-1 w-12 mx-auto rounded-full ${industry.color.replace('text-', 'bg-')} transform transition-all duration-300 ${
                hoveredId === industry.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;