import React from 'react';
import { responsibilities, skills } from '../data/index';

const WhatWeDo = () => {
  return (
    <section className="py-16 bg-white" id="why-us">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">What We Do</h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Role Overview Card */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Role Overview</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We function as your extended IT department, providing scalable outsourced support across Tier-1 help desk operations and Tier-2 technical escalations. Our role encompasses serving as the first point of contact for end-user technical issues, managing incident tickets through resolution, performing advanced troubleshooting, and maintaining critical infrastructure components.
            </p>
          </div>

          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Primary Responsibilities */}
            <div className="border-l-4 border-blue-600 pl-6 bg-white p-6 rounded-r-lg hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold mb-4 text-blue-900">Primary Responsibilities</h4>
              <ul className="space-y-3 text-gray-700">
                {responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Skills & Expertise */}
            <div className="border-l-4 border-purple-600 pl-6 bg-white p-6 rounded-r-lg hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold mb-4 text-purple-900">Core Skills & Expertise</h4>
              <ul className="space-y-3 text-gray-700">
                {skills.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;