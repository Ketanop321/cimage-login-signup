const DepartmentContacts = () => {
    const departments = [
      {
        name: "Admissions Office",
        email: "admissions@cimage.in",
        phone: "+91 72507 67676",
        hours: "Mon-Fri, 9am-5pm",
      },
      {
        name: "Financial Aid",
        email: "financialaid@cimage.in",
        phone: "+91 98350 24444",
        hours: "Mon-Fri, 10am-4pm",
      },
      {
        name: "IT Support",
        email: "itsupport@cimage.in",
        phone: "+91 72507 67676",
        hours: "Mon-Sat, 8am-6pm",
      },
    ];
  
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-serif font-bold text-center mb-8">
          Department Contacts
        </h2>
        <div className="space-y-4">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button className="w-full px-6 py-4 bg-gray-50 text-left font-medium flex justify-between items-center">
                <span>{dept.name}</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="px-6 py-4 bg-white">
                <p className="mb-2">
                  <strong>Email:</strong> {dept.email}
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> {dept.phone}
                </p>
                <p>
                  <strong>Hours:</strong> {dept.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DepartmentContacts;