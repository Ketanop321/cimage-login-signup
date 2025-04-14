import { Star } from 'lucide-react'; // or replace with your own star icon if needed

const StudentTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      photo: "/api/placeholder/80/80",
      course: "BCA (AKU)",
      batch: "2022-25",
      rating: 5,
      quote: "The practical approach to learning at CIMAGE has helped me secure a position at Wipro. The faculty support is exceptional!"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      photo: "/api/placeholder/80/80",
      course: "BCA (AKU)",
      batch: "2021-24",
      rating: 5,
      quote: "The industry-oriented add-on courses gave me an edge during placements. I'm now working with TCS thanks to CIMAGE's training."
    },
    {
      id: 3,
      name: "Ananya Gupta",
      photo: "/api/placeholder/80/80",
      course: "BCA (AKU)",
      batch: "2020-23",
      rating: 4,
      quote: "The focus on practical skills and personality development prepared me for the corporate world. Highly recommend CIMAGE for BCA."
    }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-800 to-indigo-900 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">What Our Students Say</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Hear from our alumni about their experience at CIMAGE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.course}, {testimonial.batch}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
