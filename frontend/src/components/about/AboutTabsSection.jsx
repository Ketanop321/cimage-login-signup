import React, { useState } from 'react';
import { ChevronRight, Award, BookOpen, Building, Briefcase } from 'lucide-react';

const TabsSection = ({ achievements, facilities, scholarships }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Tab Headers */}
      <div className="mb-8 border-b">
        <div className="flex flex-wrap -mb-px">
          {['overview', 'achievements', 'facilities', 'scholarships'].map((tab) => (
            <button
              key={tab}
              className={`inline-block py-4 px-6 text-lg font-medium border-b-2 ${
                activeTab === tab
                  ? 'border-blue-800 text-blue-800'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {{
                overview: 'Academic Excellence',
                achievements: 'Achievements',
                facilities: 'Facilities',
                scholarships: 'Scholarships',
              }[tab]}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === 'overview' && (
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-blue-800">Our Unique Teaching Pedagogy</h3>
              <p className="text-gray-700 mb-4">
                One of the unique things which makes CIMAGE stand apart is the innovative Teaching Pedagogy. We follow:
              </p>
              <ul className="space-y-3">
                {[
                  ['Learning by Doing', 'Practical approach to education'],
                  ['Case Study Teaching', 'Real-world problem solving'],
                  ['Unique Assessment System', 'Beyond written exams'],
                  ['Comprehensive Evaluation', 'Skills, personality, projects, presentations'],
                ].map(([title, desc], i) => (
                  <li key={i} className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded mr-3 mt-1">
                      <ChevronRight size={16} />
                    </span>
                    <span><strong>{title}</strong> - {desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-700">
                CIMAGEians have set an example for others by grabbing the title of University Topper, year after year...
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/api/placeholder/600/400" alt="Students in classroom" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-800">National Recognition & Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <Award className="text-yellow-500 mr-4 flex-shrink-0" />
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3">
                  <h4 className="text-xl font-bold mb-4 text-blue-800">Our Alumni Network</h4>
                  <p className="text-gray-700 mb-4">
                    Strong alumni presence across major metro cities...
                  </p>
                  <p className="text-gray-700">
                    Working in companies like Wipro, TCS, ICICI Bank, etc.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
                  <div className="bg-blue-800 text-white rounded-full w-32 h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold">1000+</div>
                      <div className="text-sm">Alumni Network</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'facilities' && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-800">Campus & Infrastructure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      {[<Building />, <BookOpen />, <Briefcase />][index % 3]}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{facility}</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <img src="/api/placeholder/600/350" alt="Campus Facilities" className="md:w-1/2 w-full h-64 object-cover rounded-lg shadow-lg" />
              <img src="/api/placeholder/600/350" alt="Modern Classrooms" className="md:w-1/2 w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        )}

        {activeTab === 'scholarships' && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-800">CIMAGE Scholarships</h3>
            <p className="text-gray-700 mb-6">
              CIMAGE provides scholarships based on merit:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Award className="text-yellow-600" size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center text-blue-800">{scholarship.title}</h4>
                  <p className="text-gray-700 text-center">{scholarship.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsSection;
