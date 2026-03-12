"use client";
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const animateCounters = () => {
      document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count') || "0");
        let start = 0;
        const dur = 1800;
        const step = dur / (target > 50 ? target : 50);
        const timer = setInterval(() => {
          start += Math.ceil(target / 60);
          if (start >= target) { start = target; clearInterval(timer); }
          el.textContent = start + (el.closest('.stat-item')?.querySelector('.stat-label')?.textContent?.includes('Billion') ? 'B+' : '%');
        }, step);
      });
    };

    const heroObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { animateCounters(); heroObs.disconnect(); } });
    });
    const target = document.querySelector('.hero-stats');
    if (target) heroObs.observe(target);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">Updated for 2025 Industry Standards</div>
        <h1 className="hero-title">The Complete Guide to Managed IT Services</h1>
        <p className="hero-subtitle">Optimize operations, scale infrastructure, and secure your digital assets with professional MSP partnerships. Everything you need to know about the modern IT outsourcing landscape.</p>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value" data-count="312">0</div>
            <div className="stat-label">Market Size (Billion)</div>
          </div>
          <div className="stat-item">
            <div className="stat-value" data-count="94">0</div>
            <div className="stat-label">Security Adoption</div>
          </div>
          <div className="stat-item">
            <div className="stat-value" data-count="82">0</div>
            <div className="stat-label">Cost Reduction</div>
          </div>
        </div>
      </div>
    </section>
  );
}