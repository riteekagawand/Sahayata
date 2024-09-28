// src/Pages/TrainingModules.js
import React from 'react';
import Resources from '../Components/Resources';
import Certification from '../Components/Certification';

const TrainingModules = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Training Modules</h1>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Resources Section */}
          <Resources />
          
          {/* Certification Section */}
          <Certification />
        </div>
      </div>
    </div>
  );
};

export default TrainingModules;
