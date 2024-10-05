import React from 'react';

export const HelpSection: React.FC = () => {
  return (
    <section className="help-section py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary-color opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary-color opacity-10 rounded-full translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent-color opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">How Revue Helps</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="creators-help bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-primary-color">For Creators</h3>
            <ul className="list-none pl-0">
              <li className="mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-secondary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Access to exclusive brand deals
              </li>
              <li className="mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-secondary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Promotion opportunities
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-secondary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Tools to showcase your content
              </li>
            </ul>
          </div>
          <div className="brands-help bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-primary-color">For Brands</h3>
            <ul className="list-none pl-0">
              <li className="mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-secondary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Discover relevant influencers
              </li>
              <li className="mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-secondary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Efficient collaboration tools
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-secondary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Analytics to measure campaign success
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};