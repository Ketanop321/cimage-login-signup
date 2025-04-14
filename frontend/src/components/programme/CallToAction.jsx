// src/components/programme/CallToAction.jsx
import { Send, Download } from "lucide-react";

export default function CallToAction() {
  return (
    <div className="bg-blue-800 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to kickstart your future?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join our growing community of learners and build the foundation for a successful career
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-blue-800 rounded-md hover:bg-gray-100 transition font-semibold flex items-center">
            <Send className="w-5 h-5 mr-2" />
            Apply Now
          </button>
          <button className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition font-semibold flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Download Prospectus
          </button>
        </div>
      </div>
    </div>
  );
}