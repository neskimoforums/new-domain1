"use client";
import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

export default function IndustryAnalytics() {
  const [activeTab, setActiveTab] = useState('industry');
  const chartsRef = useRef<{ [key: string]: any }>({});

  const renderCharts = () => {
    const charts = chartsRef.current;
    Object.values(charts).forEach(chart => chart?.destroy());

    // Industry Chart
    const iCtx = document.getElementById('industryChart') as HTMLCanvasElement;
    if (iCtx && activeTab === 'industry') {
      charts.industry = new Chart(iCtx, {
        type: 'bar',
        data: {
          labels: ['2020', '2021', '2022', '2023', '2024'],
          datasets: [{
            label: 'Global Market Size (USD Billion)',
            data: [186.1, 210.6, 239.7, 274.2, 312.8],
            borderColor: '#001a5e',
            backgroundColor: '#1a5cff',
            borderRadius: 10,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              min: 150,
              max: 320,
              ticks: {
                stepSize: 30,
              }
            }
          }
        }
      });
    }

    // Country Chart
    const cCtx = document.getElementById('countryChart') as HTMLCanvasElement;
    if (cCtx && activeTab === 'country') {
      charts.country = new Chart(cCtx, {
        type: 'bar',
        data: {
          labels: ['🇺🇸 USA', '🇬🇧 UK', '🇩🇪 DE', '🇮🇳 IN', '🇦🇺 AU', '🇨🇦 CA', '🇸🇬 SG', '🇯🇵 JP'],
          datasets: [
            {
              label: '2020', data: [68.4, 18.2, 14.8, 8.1, 7.4, 9.2, 3.6, 11.2], borderRadius: 8,
              backgroundColor: '#7293e3'
            },
            {
              label: '2022', data: [88.4, 25.2, 20, 15.1, 13, 13, 5, 17.2], borderRadius: 8,
              backgroundColor: '#496cc1'
            },
            {
              label: '2024', data: [118.6, 31.4, 25.8, 21.4, 13.9, 16.8, 7.4, 19.2], borderRadius: 8,
              backgroundColor: '#1a5cff'
            },

          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              min: 0,
              max: 120,
              ticks: {
                stepSize: 20,
              }
            }
          }
        }
      });
    }

    // Users Chart
    const uCtx = document.getElementById('usersChart') as HTMLCanvasElement;
    if (uCtx && activeTab === 'users') {
      charts.users = new Chart(uCtx, {
        type: 'line',
        data: {
          labels: ['2020', '2021', '2022', '2023', '2024'],
          datasets: [
            { label: 'SMB Adoption %', data: [42, 48, 53, 58, 63], borderColor: '#1a5cff', backgroundColor: 'rgba(26,92,255,0.1)', fill: true, tension: 0.4 },
            { label: 'Enterprise Adoption %', data: [71, 76, 80, 84, 88], borderColor: '#00d4aa', tension: 0.4 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              min: 30,
              max: 100,
              ticks: {
                stepSize: 10,
              }
            }
          }
        }
      });
    }
  };

  useEffect(() => {
    renderCharts();
  }, [activeTab]);

  return (
    <section id="demand" className="reveal max-w-7xl mx-auto md:px-0 px-4  py-17 border-b border-gray-300">
      {/* SECTION LABEL */}
      <div
        className="text-blue-600 font-bold text-[12px] uppercase tracking-wider mb-2"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        Industry Analytics
      </div>

      {/* SECTION TITLE */}
      <h2
        className="font-extrabold text-gray-900 mb-6 tracking-tight"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          lineHeight: "1.15"
        }}
      >
        Last 5 Years: Industry Demand Data
      </h2>

      {/* TABS */}
      <div className="flex gap-1 mb-8 bg-gray-100 p-1 rounded-xl w-fit">
        {['industry', 'country', 'users'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg md:text-sm text-[10.5px] font-semibold hover:cursor-pointer transition-all ${activeTab === tab
              ? ' text-white shadow-sm bg-blue-600'
              : 'text-gray-500 hover:text-gray-700 border border-gray-400'
              }`}
          >
            {tab === 'industry' ? 'Industry Demand' : tab === 'country' ? 'Country Demand' : 'Global Users'}
          </button>
        ))}
      </div>

      {/* PANEL CONTENT */}
      <div className="space-y-10">
        <div className="overflow-x-auto rounded-xl   bg-white">
          <table className="w-full text-left border-collapse">
            <thead style={{ fontFamily: "'Syne', sans-serif" }} className="bg-[#0a0f1e] border-b text-white tracking-wider border-gray-200">
              {activeTab === 'industry' && (
                <tr>
                  <th className="p-4 text-xs font-bold   text-white">Year</th>
                  <th className="p-4 text-xs font-bold   text-white">Global Market Size (USD)</th>
                  <th className="p-4 text-xs font-bold   text-white">YoY Growth</th>
                  <th className="p-4 text-xs font-bold   text-white">Top Segment</th>
                  <th className="p-4 text-xs font-bold   text-white">Key Driver</th>
                </tr>
              )}
              {activeTab === 'country' && (
                <tr>
                  <th className="p-4 text-xs font-bold   text-white">Country</th>
                  <th className="p-4 text-xs font-bold   text-white">2020 Market</th>
                  <th className="p-4 text-xs font-bold   text-white">2022 Market</th>
                  <th className="p-4 text-xs font-bold   text-white">2024 Market</th>
                  <th className="p-4 text-xs font-bold   text-white">5-Year CAGR</th>
                  <th className="p-4 text-xs font-bold   text-white">Top Service</th>
                </tr>
              )}
              {activeTab === 'users' && (
                <tr>
                  <th className="p-4 text-xs font-bold   text-white">Year</th>
                  <th className="p-4 text-xs font-bold   text-white">Businesses Using MSPs</th>
                  <th className="p-4 text-xs font-bold   text-white">SMB Adoption Rate</th>
                  <th className="p-4 text-xs font-bold   text-white">Enterprise Adoption</th>
                  <th className="p-4 text-xs font-bold   text-white">Remote Influence</th>
                </tr>
              )}
            </thead>
            <tbody className="divide-y divide-gray-300  text-[0.85rem]">
              {activeTab === 'industry' && (
                <>
                  <tr><td className="p-4  text-gray-900">2020</td><td className="p-4">$186.1 Billion</td><td className="p-4 text-gray-800 font-bold">+11.2%</td><td className="p-4">Managed Security</td><td className="p-4 text-gray-700 ">Remote work surge (COVID-19)</td></tr>
                  <tr><td className="p-4   text-gray-900">2021</td><td className="p-4">$210.6 Billion</td><td className="p-4 text-gray-800 font-bold">+13.2%</td><td className="p-4">Cloud Services</td><td className="p-4 text-gray-700 ">Rapid cloud adoption</td></tr>
                  <tr><td className="p-4   text-gray-900">2022</td><td className="p-4">$239.7 Billion</td><td className="p-4 text-gray-800 font-bold">+13.8%</td><td className="p-4">Cybersecurity MSP</td><td className="p-4 text-gray-700 ">Rising ransomware attacks</td></tr>
                  <tr><td className="p-4   text-gray-900">2023</td><td className="p-4">$274.2 Billion</td><td className="p-4 text-gray-800 font-bold">+14.4%</td><td className="p-4">Cloud & AI Monitoring</td><td className="p-4 text-gray-700 ">AI-driven IT ops adoption</td></tr>
                  <tr><td className="p-4   text-gray-900">2024</td><td className="p-4">$312.8 Billion</td><td className="p-4 text-gray-800 font-bold">+14.1%</td><td className="p-4">Compliance Services</td><td className="p-4 text-gray-700 ">GDPR & HIPAA enforcement</td></tr>
                </>
              )}
              {activeTab === 'country' && (
                <>
                  <tr>
                    <td className="p-4 text-gray-900">🇺🇸 United States</td>
                    <td className="p-4">$68.4B</td>
                    <td className="p-4 text-gray-800">$91.2B</td>
                    <td className="p-4 text-gray-800">$118.6B</td>
                    <td className="p-4 text-gray-800 font-bold">+14.2%</td>
                    <td className="p-4">Cloud & Security MSP</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900">🇬🇧 United Kingdom</td>
                    <td className="p-4">$18.2B</td>
                    <td className="p-4">$24.1B</td>
                    <td className="p-4 text-gray-800">$31.4B</td>
                    <td className="p-4 text-gray-800 font-bold">+14.6%</td>
                    <td className="p-4">Compliance Services</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900">🇩🇪 Germany</td>
                    <td className="p-4">$14.8B</td>
                    <td className="p-4">$19.6B</td>
                    <td className="p-4 text-gray-800">$25.8B</td>
                    <td className="p-4 text-gray-800 font-bold">+14.8%</td>
                    <td className="p-4">Infrastructure MSP</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900">🇮🇳 India</td>
                    <td className="p-4">$8.1B</td>
                    <td className="p-4">$13.2B</td>
                    <td className="p-4 text-gray-800">$21.4B</td>
                    <td className="p-4 text-gray-800 font-bold">+21.4%</td>
                    <td className="p-4">Help Desk & Cloud</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900">🇦🇺 Australia</td>
                    <td className="p-4">$7.4B</td>
                    <td className="p-4">$10.1B</td>
                    <td className="p-4 text-gray-800">$13.9B</td>
                    <td className="p-4 text-gray-800 font-bold">+13.5%</td>
                    <td className="p-4">Security & Backup</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900">🇨🇦 Canada</td>
                    <td className="p-4">$9.2B</td>
                    <td className="p-4">$12.4B</td>
                    <td className="p-4 text-gray-800">$16.8B</td>
                    <td className="p-4 text-gray-800 font-bold">+13.0%</td>
                    <td className="p-4">Network MSP</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900">🇸🇬 Singapore</td>
                    <td className="p-4">$3.6B</td>
                    <td className="p-4">$5.2B</td>
                    <td className="p-4 text-gray-800">$7.4B</td>
                    <td className="p-4 text-gray-800 font-bold">+15.5%</td>
                    <td className="p-4">Cloud & Compliance</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900">🇯🇵 Japan</td>
                    <td className="p-4">$11.2B</td>
                    <td className="p-4">$14.8B</td>
                    <td className="p-4 text-gray-800">$19.2B</td>
                    <td className="p-4 text-gray-800 font-bold">+11.4%</td>
                    <td className="p-4">Infrastructure MSP</td>
                  </tr>
                </>
              )}
              {activeTab === 'users' && (
                <>
                  <tr><td className="p-4  text-gray-900">2020</td><td className="p-4">64,000+</td><td className="p-4   text-gray-700">42%</td><td className="p-4 text-gray-700">71%</td><td className="p-4 text-gray-800 font-bold">⬆ High (COVID)</td></tr>
                  <tr><td className="p-4    text-gray-900">2021</td><td className="p-4">73,500+</td><td className="p-4  text-gray-700">48%</td><td className="p-4 text-gray-700">76%</td><td className="p-4 text-gray-800 font-bold">⬆ Very High</td></tr>
                  <tr><td className="p-4    text-gray-900">2022</td><td className="p-4">82,000+</td><td className="p-4  text-gray-700">53%</td><td className="p-4 text-gray-700">80%</td><td className="p-4 text-gray-800 font-bold">⬆ Sustained</td></tr>
                  <tr><td className="p-4    text-gray-900">2023</td><td className="p-4">93,400+</td><td className="p-4  text-gray-700">58%</td><td className="p-4 text-gray-700">84%</td><td className="p-4 text-gray-800 font-bold">⬆ Hybrid Norm</td></tr>
                  <tr><td className="p-4    text-gray-900">2024</td><td className="p-4">106,000+</td><td className="p-4  text-gray-700">63%</td><td className="p-4 text-gray-700">88%</td><td className="p-4 text-gray-800 font-bold">⬆ AI-Driven</td></tr>
                </>
              )}
            </tbody>
          </table>
        </div>

        {/* CHART WRAP */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm h-[400px]">
          {activeTab === 'industry' && <canvas id="industryChart"></canvas>}
          {activeTab === 'country' && <canvas id="countryChart"></canvas>}
          {activeTab === 'users' && <canvas id="usersChart"></canvas>}
        </div>
      </div>
    </section>
  );
}