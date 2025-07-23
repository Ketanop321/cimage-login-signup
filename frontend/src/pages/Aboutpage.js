import { useState } from 'react';
import { Play, Award, BookOpen, Users, Building, Briefcase, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import HeroSection from '../components/about/HeroSection';
import TabsSection from '../components/about/AboutTabsSection';
import ContactSection from '../components/about/ContactSection'
import Navbar from '../components/Navbar';
import TestimonialSection from '../components/about/testimonial'


export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    alert("Thank you for your message. We'll get back to you soon!");
  };

  const scholarships = [
    {
      title: "Vijayam Scholarship",
      description: "Provided to meritorious students based on the 'Entrance cum Scholarship Examination'. Those who excel in the examination are provided the scholarship. Students are chosen at the time of the Entrance Exam."
    },
    {
      title: "Eklavya Scholarship",
      description: "Provided on the ground of merit to students who show phenomenal success during their studies. Depending upon the progress of the student, one may be selected during their study at CIMAGE. It is separate from the Entrance Exam."
    },
    {
      title: "Student Credit Card Scheme",
      description: "A unique scheme launched by Bihar Government for students whose family annual income is less than 8 Lakh Rs. Under this scheme, a student is provided a loan of up to 4 Lakh to pursue higher studies."
    }
  ];

  const leaders = [
    {
      id: 1,
      name: "Prof. (Dr.) Neeraj Agrawal",
      title: "Director, CIMAGE Group",
      description: "Leads CIMAGE Group with a focus on innovation and lifelong learning. Guided the institute’s evolution into a top IT & Management college in Bihar.",
      image: "https://cimage.in/sitepanel/uploads/administration/Director-CIMAGE-Group-of-Institutions-1024x683.jpg"
    },
    {
      id: 2,
      name: "Mrs. Megha Agrawal",
      title: "Center Head, CIMAGE",
      description: "Oversees academic and co‑curricular excellence across CIMAGE centers. Praised students, staff, and faculty for keeping the CIMAGE spirit alive.",
      image: "https://cimage.in/sitepanel/uploads/administration/Megha-Agrawal-1024x576.png"
    },
    {
      id: 3,
      name: "Prof. (Dr.) Neeraj Poddar",
      title: "Dean, CIMAGE",
      description: "Dean of CIMAGE Group of Institutions in Patna, overseeing academic operations. Also founder of a martial‑arts institute in Bihar and Head of the English Department.📚",
      image: "https://cimage.in/sitepanel/uploads/administration/n_p.jpg"
    }

  ];

  const achievements = [
    "Atal Shresth Sansthan Samman by Union HRD Minister Sri Ramesh Pokhariyal Nishank",
    "Most Emerging Institute for Management Education-2012 by AIMA",
    "Best B-School of India (East) Award by ASSOCHAM, AIU & Ministry of HRD",
    "University Toppers & Gold Medals since inception"
  ];

  const facilities = [
    "Hi-Tech Campus with Modern Classrooms",
    "Computer Labs with Latest Software",
    "Digital Library Resources",
    "Industry Collaboration Centers",
    "Sports & Recreation Facilities",
    "Placement Cell",
    "Super Resource Centre of IIT Bombay"
  ];

  return (
    <>
      <Navbar />
      <div>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}

          <HeroSection />

          {/* Introduction Section */}
          <div className="container mx-auto py-16 px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-blue-800">Welcome to CIMAGE Group</h2>
                <p className="text-gray-700 mb-4">
                  CIMAGE Group of Institutions is a renowned educational organization, situated in Patna, Bihar.
                  Established in 2009 by 'Vijayam Education Trust', a Non-profit Charitable Trust, CIMAGE
                  is considered to be the synonyms of 'Quality Education, Innovation in Education, Academic Rigor,
                  Unique Teaching Pedagogy, Best Result, Job Oriented Skills Development and Placements' in Bihar.
                </p>
                <p className="text-gray-700 mb-6">
                  CIMAGE was created to fill the gap left untouched by others - not only to prepare students to earn
                  a University Degree but to make them job-worthy by keeping them abreast with the latest tools, technology,
                  knowledge, and skills, preparing them as per industry needs and helping them get employed in top-notch organizations.
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-16 bg-yellow-500"></div>
                  <p className="font-semibold text-blue-800">Inaugurated by Hon. C.M. of Bihar, Mr. Nitish Kumar in 2009</p>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <img
                  src="https://cimage.in/sitepanel/uploads/aboutus/cimage-about-cm.jpg"
                  alt="CIMAGE Campus"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Colleges Section */}
          <div className="bg-blue-800 text-white py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Colleges</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-xl font-bold mb-3">CIMAGE College</h3>
                  <p className="mb-4">Under Patliputra University</p>
                  <p className="text-yellow-300 font-medium">Offering BCA, BBA, BSc.IT</p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-xl font-bold mb-3">CIMAGE Business School</h3>
                  <p className="mb-4">Under Patliputra University</p>
                  <p className="text-yellow-300 font-medium">Offering BBM, BBA</p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-xl font-bold mb-3">CIMAGE Management College</h3>
                  <p className="mb-4">Under Patliputra University</p>
                  <p className="text-yellow-300 font-medium">Offering BBA, PGDM</p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-xl font-bold mb-3">CIMAGE Technical Institute</h3>
                  <p className="mb-4">Under Aryabhatta Knowledge University</p>
                  <p className="text-yellow-300 font-medium">Offering BCA, BSc.IT</p>
                </div>
              </div>
              <div className="text-center mt-12">
                <p className="text-xl font-semibold mb-4">CIMAGE is the only Super Resource Centre of IIT Bombay in Bihar</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 mt-4">
                  Explore Our Programs
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}

          <TabsSection
            achievements={achievements}
            facilities={facilities}
            scholarships={scholarships}
          />

          {/* Leadership Section - Simplified */}
          <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-10 text-center text-blue-800">Our Leadership</h2>
              <div className="w-full overflow-x-auto">
                <div className="flex justify-center">
                  <div className="flex space-x-6 min-w-max px-4 py-6 max-w-7xl">
                    {leaders.map((leader) => (
                      <div
                        key={leader.id}
                        className="w-80 flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                      >
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-72 object-cover bg-gray-200"
                        />
                        <div className="p-6">
                          <h2 className="text-2xl font-bold mb-1 text-blue-800">{leader.name}</h2>
                          <p className="text-gray-600 mb-3 text-base">{leader.title}</p>
                          <p className="text-gray-700 text-sm line-clamp-2">{leader.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>



            </div>
          </div>

          {/* Student Life Section */}
          <div className="container mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Campus Life at CIMAGE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="rounded-lg overflow-hidden shadow-lg group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/api/placeholder/400/320"
                    alt="Cultural Festival"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Cultural Events</h3>
                    <p className="text-sm">Annual festivals and cultural celebrations</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://cimagedigital.com/wp-content/uploads/2025/06/cimag33-1024x576.jpg"
                    alt="Tech Club"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Tech Clubs</h3>
                    <p className="text-sm">Coding, robotics and innovation labs</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://cimagedigital.com/wp-content/uploads/2025/06/Cricketii-1024x682.jpeg"
                    alt="Sports Activities"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Sports</h3>
                    <p className="text-sm">Indoor and outdoor sports facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Section - Simplified */}
          <TestimonialSection />


          {/* Contact Section*/}

          <ContactSection />
        </div>
      </div>
    </>
  );
}