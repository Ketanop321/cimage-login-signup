import React from "react";

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-lg transition-all duration-300 border border-sky-100 hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-sky-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
