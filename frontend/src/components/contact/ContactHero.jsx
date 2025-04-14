const ContactHero = () => {
    return (
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Get in Touch With Us
          </h1>
          <p className="text-xl md:text-2xl">
            We're here to answer your questions and guide you in the right direction.
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    );
  };
  
  export default ContactHero;