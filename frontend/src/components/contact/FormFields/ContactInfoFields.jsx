const ContactInfoFields = ({ formData, handleChange }) => {
    return (
      <>
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email Here"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
  
        {/* Mobile */}
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
            Mobile No.*
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            placeholder="Enter Mobile Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
  
        {/* Father's Name */}
        <div>
          <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700 mb-1">
            Fathers' Name*
          </label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
            placeholder="Fathers' Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
  
        {/* Mother's Name */}
        <div>
          <label htmlFor="motherName" className="block text-sm font-medium text-gray-700 mb-1">
            Mothers' Name*
          </label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            required
            placeholder="Mothers' Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
  
        {/* Aadhaar */}
        <div>
          <label htmlFor="aadhaar" className="block text-sm font-medium text-gray-700 mb-1">
            Aadhaar No.*
          </label>
          <input
            type="text"
            id="aadhaar"
            name="aadhaar"
            value={formData.aadhaar}
            onChange={handleChange}
            required
            placeholder="5678 8900 8888"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
  
        {/* Voter ID */}
        <div>
          <label htmlFor="voterId" className="block text-sm font-medium text-gray-700 mb-1">
            Voter ID (Optional)
          </label>
          <input
            type="text"
            id="voterId"
            name="voterId"
            value={formData.voterId}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
  
        {/* Parent's Contact */}
        <div>
          <label htmlFor="parentContact" className="block text-sm font-medium text-gray-700 mb-1">
            Parent's Contact Number*
          </label>
          <input
            type="tel"
            id="parentContact"
            name="parentContact"
            value={formData.parentContact}
            onChange={handleChange}
            required
            placeholder="9268459609"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </>
    );
  };
  
  export default ContactInfoFields;