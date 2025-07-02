 import { useState } from "react";
import { Clock, Check, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import StudentTestimonials from "../components/programme/TestimonialCard";
import FaqSection from "../components/programme/FAQItem";
import WhyChooseUs from "../components/programme/WhyChooseUs";
import ProgrammeComparison from "../components/programme/ProgrammerComparisonTable";
import ContactEnquirySection from "../components/programme/EnquiryForm";
import CallToAction from "../components/programme/CallToAction";
import { programmes } from "../components/programme/programmedata/Programmes";

export default function ProgrammePage() {
  const [selectedProgramme, setSelectedProgramme] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courseInterest: "",
  });

  const handleOpenModal = (programme) => {
    setSelectedProgramme(programme);
  };

  const handleCloseModal = () => {
    setSelectedProgramme(null);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert("Thank you for your interest! Our team will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      courseInterest: "",
    });
  };

  return (
    <>
   {/*navbar */}
   <Navbar/>

    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/api/placeholder/1920/600')", mixBlendMode: "overlay" }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Your Future With Our Career-Driven Programmes
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl">
            Undergraduate & Postgraduate Courses Designed for Tomorrow's Leaders
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold">
              Explore Courses
            </button>
            <button className="px-6 py-3 bg-white text-blue-900 rounded-md hover:bg-gray-100 transition font-semibold">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Programmes Overview Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Academic Programmes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of undergraduate and postgraduate programmes designed for career success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((programme) => (
            <div 
              key={programme.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition"
            >
              <div className={`${programme.color} p-4 text-center`}>
                <span className="text-4xl">{programme.icon}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{programme.name}</h3>
                  {programme.badge && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                      {programme.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{programme.duration}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{programme.level}</span>
                </div>
                <p className="text-gray-600 mb-6">{programme.tagline}</p>
                <button
                  onClick={() => handleOpenModal(programme)}
                  className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-blue-800 rounded-md transition flex items-center justify-center font-medium"
                >
                  More Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Programme Details */}
      {selectedProgramme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedProgramme.fullName}</h2>
                  <p className="text-lg text-gray-600">{selectedProgramme.name}</p>
                </div>
                <button 
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-blue-700 font-medium">Duration</p>
                  <p className="text-lg font-semibold">{selectedProgramme.duration}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-blue-700 font-medium">University</p>
                  <p className="text-lg font-semibold">{selectedProgramme.university}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-blue-700 font-medium">Fee Structure</p>
                  <p className="text-lg font-semibold">{selectedProgramme.fee}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">About the Course</h3>
                <p className="text-gray-600 mb-6">{selectedProgramme.about}</p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">Eligibility Criteria</h3>
                <p className="text-gray-600 mb-6">{selectedProgramme.eligibility}</p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Subjects</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {selectedProgramme.subjects.map((subject, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{subject}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">Career Opportunities</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {selectedProgramme.careerPaths.map((career, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-gray-700">{career}</span>
                    </li>
                  ))}
                </ul>

                {selectedProgramme.addOnCourses && (
                  <>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Add-On Courses</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                      {selectedProgramme.addOnCourses.map((course, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-gray-700">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="flex justify-center mt-8">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Programme Comparison Table */}
      
      <ProgrammeComparison programmes={programmes} />

      {/* Why Choose Us Section */}

      
      <WhyChooseUs/>

      {/* Student Testimonials */}
      
      <StudentTestimonials/>

      {/* FAQ Section */}
     
      <FaqSection/>

      {/* Call to Action Section */}
      
      <CallToAction/>

      {/* Enquiry Form */}
     
       <ContactEnquirySection
        formData={formData}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        programmes={programmes}
      />
    </div>
    </>
  );
}