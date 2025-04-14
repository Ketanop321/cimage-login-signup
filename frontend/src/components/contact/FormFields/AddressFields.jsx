const AddressFields = ({ formData, handleChange }) => {
    return (
      <>
        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Country*
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
            readOnly
          />
        </div>
  
        {/* State */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            State*
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">--Select State--</option>
            <option value="bihar">Bihar</option>
            <option value="up">Uttar Pradesh</option>
            <option value="jharkhand">Jharkhand</option>
            <option value="west-bengal">West Bengal</option>
          </select>
        </div>
  
        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City*
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">--Select City--</option>
            <option value="patna">Patna</option>
            <option value="gaya">Gaya</option>
            <option value="muzaffarpur">Muzaffarpur</option>
            <option value="bhagalpur">Bhagalpur</option>
          </select>
        </div>
  
        {/* Zip */}
        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
            Zip/Pin Code*
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </>
    );
  };
  
  export default AddressFields;