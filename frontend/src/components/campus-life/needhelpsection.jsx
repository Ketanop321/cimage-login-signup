import React from 'react';

const helpLinks = [
  {
    title: 'Housing Office',
    description: 'Questions about dormitories or off-campus housing',
    linkText: 'Contact →',
    href: '#',
  },
  {
    title: 'Dining Services',
    description: 'Meal plans, dietary restrictions, or cafeteria hours',
    linkText: 'Contact →',
    href: '#',
  },
  {
    title: 'Student Affairs',
    description: 'General student life questions and support',
    linkText: 'Contact →',
    href: '#',
  },
  {
    title: 'FAQs',
    description: 'Find answers to common questions',
    linkText: 'View FAQs →',
    href: '#',
  },
];

const ContactHelp = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12 text-center">
          Need <span className="text-blue-600">Help?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpLinks.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a href={item.href} className="text-blue-600 font-medium hover:underline">
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactHelp;
