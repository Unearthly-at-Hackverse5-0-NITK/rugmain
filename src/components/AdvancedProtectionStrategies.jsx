import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

export function AdvancedProtectionStrategies() {
  const [completedSections, setCompletedSections] = useState([]);

  const sections = [
    {
      title: 'Risk Management',
      content: 'Implement strict investment rules like never investing more than 2-5% of your portfolio in high-risk crypto projects.'
    },
    {
      title: 'Due Diligence Checklist',
      content: 'Create a comprehensive checklist including team verification, smart contract audits, project roadmap, and community engagement.'
    },
    {
      title: 'Portfolio Diversification',
      content: 'Spread investments across different cryptocurrencies, blockchain networks, and risk levels to minimize potential losses.'
    }
  ];

  const toggleSectionCompletion = (index) => {
    setCompletedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12">Advanced Protection Strategies</h1>
          <div className="max-w-2xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                whileHover={{ scale: 1.02 }}
                className={`bg-white/10 p-6 rounded-xl backdrop-blur-lg ${
                  completedSections.includes(index)
                    ? 'border-2 border-green-500'
                    : 'border-2 border-transparent hover:border-purple-500'
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <button
                    onClick={() => toggleSectionCompletion(index)}
                    className="text-sm flex items-center"
                  >
                    {completedSections.includes(index) ? (
                      <CheckCircle className="text-green-500 mr-2" />
                    ) : (
                      <XCircle className="text-purple-500 mr-2" />
                    )}
                    {completedSections.includes(index) ? 'Completed' : 'Mark Complete'}
                  </button>
                </div>
                <p className="text-purple-200">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
