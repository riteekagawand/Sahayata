// components/Certification.js
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const Certification = () => {
  const certifications = [
    {
      title: 'Emergency Response Certification',
      description: 'Master the essentials of emergency response and earn your certification.',
      progress: 50, // You can modify this dynamically based on user progress
    },
    {
      title: 'Advanced First Aid Certification',
      description: 'Become certified in advanced first aid techniques.',
      progress: 20,
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Certification Programs</h2>
      {certifications.map((certification, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold">{certification.title}</h3>
          <p className="text-gray-600">{certification.description}</p>
          <ProgressBar progress={certification.progress} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Start Course
          </button>
        </div>
      ))}
    </div>
  );
};

export default Certification;
