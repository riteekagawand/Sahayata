// components/Resources.js
import React from 'react';

const Resources = () => {
  const resources = [
    {
      title: 'First Aid Basics',
      description: 'Learn the fundamental techniques of first aid in emergency situations.',
      type: 'Video',
      link: '#',
    },
    {
      title: 'Crisis Management 101',
      description: 'An in-depth guide to handling crisis situations effectively.',
      type: 'Guide',
      link: '#',
    },
    {
      title: 'Disaster Preparedness',
      description: 'Steps to prepare for natural and man-made disasters.',
      type: 'Article',
      link: '#',
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Preparedness Resources</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{resource.title}</h3>
            <p className="text-gray-600">{resource.description}</p>
            <a
              href={resource.link}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Access {resource.type}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
