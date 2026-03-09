"use client";
import React from 'react';
import { TrendingUp, MapPin } from 'lucide-react';

interface YearData {
  year: string;
  marketSize: string;
  growthRate: string;
  contracts: string;
  impact: string;
}

interface CountyData {
  rank: number;
  county: string;
  state: string;
  businesses: string;
  contracts: string;
  spend: string;
}

const MarketDemandAnalysis = () => {
  const yearData: YearData[] = [
    { year: '2021', marketSize: '$48.2B', growthRate: '+12.4%', contracts: '284,000', impact: 'High (COVID-19)' },
    { year: '2022', marketSize: '$54.8B', growthRate: '+13.7%', contracts: '319,000', impact: 'Very High' },
    { year: '2023', marketSize: '$62.3B', growthRate: '+13.9%', contracts: '358,000', impact: 'Sustained High' },
    { year: '2024', marketSize: '$71.1B', growthRate: '+14.1%', contracts: '402,000', impact: 'Normalized High' },
    { year: '2025', marketSize: '$81.4B', growthRate: '+14.5%', contracts: '453,000', impact: 'Hybrid Model Dominant' }
  ];

  const countyData: CountyData[] = [
    { rank: 1, county: 'Santa Clara County', state: 'CA', businesses: '47,200', contracts: '38,400', spend: '$8,950' },
    { rank: 2, county: 'New York County', state: 'NY', businesses: '52,800', contracts: '36,900', spend: '$7,800' },
    { rank: 3, county: 'Los Angeles County', state: 'CA', businesses: '68,500', contracts: '35,200', spend: '$6,400' },
    { rank: 4, county: 'King County', state: 'WA', businesses: '34,100', contracts: '28,700', spend: '$7,200' },
    { rank: 5, county: 'Cook County', state: 'IL', businesses: '42,300', contracts: '26,800', spend: '$5,900' },
    { rank: 6, county: 'Travis County', state: 'TX', businesses: '28,900', contracts: '24,100', spend: '$6,800' },
    { rank: 7, county: 'Middlesex County', state: 'MA', businesses: '31,500', contracts: '23,400', spend: '$7,100' },
    { rank: 8, county: 'Orange County', state: 'CA', businesses: '36,200', contracts: '22,900', spend: '$6,200' },
    { rank: 9, county: 'Fairfax County', state: 'VA', businesses: '25,700', contracts: '21,800', spend: '$6,500' },
    { rank: 10, county: 'Maricopa County', state: 'AZ', businesses: '38,400', contracts: '20,600', spend: '$5,400' }
  ];

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return 'text-yellow-500 font-bold text-xl';
      case 2:
        return 'text-gray-400 font-bold text-xl';
      case 3:
        return 'text-orange-500 font-bold text-xl';
      default:
        return 'font-semibold text-gray-700';
    }
  };

  return (
    <section className="py-16 bg-gray-50" id = "case-studies">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
          IT Support Services Market Demand Analysis
        </h2>

        {/* 5-Year Demand Trend Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 overflow-x-auto">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-blue-900">
              5-Year IT Support Services Demand Growth (USA)
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 rounded-tl-lg">Year</th>
                  <th className="px-6 py-4">Market Size (USD Billion)</th>
                  <th className="px-6 py-4">Annual Growth Rate</th>
                  <th className="px-6 py-4">Active Support Contracts</th>
                  <th className="px-6 py-4 rounded-tr-lg">Remote Work Impact</th>
                </tr>
              </thead>
              <tbody>
                {yearData.map((data, index) => (
                  <tr 
                    key={index} 
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold">{data.year}</td>
                    <td className="px-6 py-4">{data.marketSize}</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">{data.growthRate}</td>
                    <td className="px-6 py-4">{data.contracts}</td>
                    <td className="px-6 py-4">{data.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* County Demand Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 overflow-x-auto">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-6 h-6 text-purple-600" />
            <h3 className="text-2xl font-bold text-purple-900">
              Top 10 US Counties by IT Support Demand (2025)
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 rounded-tl-lg">Rank</th>
                  <th className="px-6 py-4">County, State</th>
                  <th className="px-6 py-4">Active Businesses</th>
                  <th className="px-6 py-4">Support Contracts</th>
                  <th className="px-6 py-4 rounded-tr-lg">Avg. Monthly Spend</th>
                </tr>
              </thead>
              <tbody>
                {countyData.map((data, index) => (
                  <tr 
                    key={index} 
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className={`px-6 py-4 ${getRankStyle(data.rank)}`}>
                      {data.rank}
                    </td>
                    <td className="px-6 py-4">{data.county}, {data.state}</td>
                    <td className="px-6 py-4">{data.businesses}</td>
                    <td className="px-6 py-4">{data.contracts}</td>
                    <td className="px-6 py-4 font-semibold">{data.spend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketDemandAnalysis;