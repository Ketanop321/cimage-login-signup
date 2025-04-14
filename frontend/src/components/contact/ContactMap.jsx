const ContactMap = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-serif font-bold text-center mb-8">Our Location</h2>
        <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.847955389947!2d85.11909731501864!3d25.61218398369681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5849a8a3f409%3A0x8a0e9a9a3a3a3a3a!2sS.K.%20Puri%20Park%2C%20Boring%20Road%2C%20Patna!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Cimage Institute Location"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default ContactMap;