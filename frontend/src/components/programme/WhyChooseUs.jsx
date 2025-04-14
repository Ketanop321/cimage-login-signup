import { BookOpen, Users, Award, ChevronRight, Check } from 'lucide-react';

const whyChooseUs = [
  {
    id: 1,
    title: "Industry-Oriented Curriculum",
    description: "Course content aligned with current industry needs and standards",
    icon: <BookOpen className="w-8 h-8 text-blue-500" />
  },
  {
    id: 2,
    title: "Experienced Faculty",
    description: "Learn from qualified professionals with extensive industry experience",
    icon: <Users className="w-8 h-8 text-blue-500" />
  },
  {
    id: 3,
    title: "Placement Assistance",
    description: "Over 6000 students placed in top MNCs like Wipro, TCS, and Infosys",
    icon: <Award className="w-8 h-8 text-blue-500" />
  },
  {
    id: 4,
    title: "Modern Infrastructure",
    description: "State-of-the-art computer labs and high-tech campus facilities",
    icon: <ChevronRight className="w-8 h-8 text-blue-500" />
  },
  {
    id: 5,
    title: "Add-On Courses",
    description: "Specialized courses to enhance employability and technical skills",
    icon: <Check className="w-8 h-8 text-blue-500" />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose CIMAGE College</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover what makes us the Best BCA College in Patna and a leading institution for IT education
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyChooseUs.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Times of India Recognition</h3>
            <p className="text-gray-700">
              CIMAGE has been recognized by the prestigious Times of India as the top-ranking college in Bihar, and acknowledged as the best BCA college in Patna.
            </p>
          </div>
          <img
            src="/api/placeholder/150/100"
            alt="Times of India Recognition"
            className="rounded-md shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
