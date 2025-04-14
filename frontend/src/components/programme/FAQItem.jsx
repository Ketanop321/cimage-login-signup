import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What is the eligibility for BCA programme?",
      answer: "The eligibility for BCA is 10+2 from any recognized board with Mathematics as a subject. A minimum of 45% marks is preferable."
    },
    {
      id: 2,
      question: "Is there any entrance exam for MBA?",
      answer: "Yes, candidates need to qualify in entrance exams like CAT, MAT, XAT, or the university's own entrance test. Specific requirements vary by university affiliation."
    },
    {
      id: 3,
      question: "Do you offer placement support for students?",
      answer: "Absolutely! CIMAGE has a dedicated placement cell with industry connections to companies like Wipro, TCS, Infosys, and many more. Over 6000 students have been successfully placed in the past 11 years."
    },
    {
      id: 4,
      question: "What are the additional certifications offered along with BCA?",
      answer: "CIMAGE offers several industry-oriented add-on courses such as Advanced Web Development, Java Programming, Computer Hardware & Networking, Ethical Hacking, Cloud Computing, and more."
    },
    {
      id: 5,
      question: "What is the fee structure for BCA programme?",
      answer: "The fee for BCA (AKU) is ₹2,21,000 for the entire 3-year programme. Additional fees include ₹1000 per semester for internal examinations and ₹1000 as refundable library security deposit."
    }
  ];

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our programmes and admission process
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq) => (
          <div key={faq.id} className="mb-4 border rounded-lg overflow-hidden">
            <button
              className="w-full text-left p-4 focus:outline-none flex justify-between items-center bg-white hover:bg-gray-50"
              onClick={() => toggleFaq(faq.id)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              {activeFaq === faq.id ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {activeFaq === faq.id && (
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
