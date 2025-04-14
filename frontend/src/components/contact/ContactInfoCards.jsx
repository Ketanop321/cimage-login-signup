const ContactInfoCards = () => {
    const contactMethods = [
      {
        icon: "https://wpdemo.zcubethemes.com/qeducato/content/uploads/2023/03/contact-icon01.png",
        title: "Phone Support",
        details: ["+91 98350 24444", "+91 72507 67676"],
      },
      {
        icon: "https://wpdemo.zcubethemes.com/qeducato/content/uploads/2023/03/contact-icon02.png",
        title: "Email Address",
        details: ["info@cimage.in"],
      },
      {
        icon: "https://wpdemo.zcubethemes.com/qeducato/content/uploads/2023/03/contact-icon03.png",
        title: "Office Address",
        details: ["S.K. Puri Park, Boring Road, Patna"],
      },
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={method.icon}
                alt={`${method.title} icon`}
                className="w-12 h-12 mr-4"
              />
              <h3 className="text-xl font-serif font-semibold">{method.title}</h3>
            </div>
            {method.details.map((detail, i) => (
              <p key={i} className="text-lg mb-2">
                {detail}
              </p>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default ContactInfoCards;