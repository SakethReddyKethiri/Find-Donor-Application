import axios from "axios";
import React, { useState } from "react";

const BloodRequestForm = () => {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    unitsNeeded: "",
    patientName: "",
    contactPerson: "",
    contactNumber: "",
    urgencyLevel: "",
    hospitalName: "",
    hospitalAddress: "",
    pinCode: "",
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResponse(null);

    try {
      const res = await axios.post("http://localhost:9000/donor/send", formData);
      setResponse(res.data);
    } catch (err) {
      console.error("Error while sending request:", err);
      setError(err.response?.data?.message || "Failed to fetch donors.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-gradient-to-br from-red-100 to-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Blood Request Form</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Blood Group */}
          <div>
            <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
              Blood Group
            </label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Units Needed */}
          <div>
            <label htmlFor="unitsNeeded" className="block text-sm font-medium text-gray-700">
              Units Needed
            </label>
            <input
              type="number"
              id="unitsNeeded"
              name="unitsNeeded"
              value={formData.unitsNeeded}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Enter Units Needed"
              required
            />
          </div>

          {/* Patient Name */}
          <div>
            <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
              Patient Name
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Enter Patient Name"
              required
            />
          </div>

          {/* Contact Person */}
          <div>
            <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
              Contact Person
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Enter Contact Person's Name"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Enter Contact Number"
              required
            />
          </div>

          {/* Urgency Level */}
          <div>
            <label htmlFor="urgencyLevel" className="block text-sm font-medium text-gray-700">
              Urgency Level
            </label>
            <input
              type="text"
              id="urgencyLevel"
              name="urgencyLevel"
              value={formData.urgencyLevel}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Enter Urgency Level (e.g., High, Medium, Low)"
              required
            />
          </div>

          {/* Hospital Name */}
          <div>
            <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700">
              Hospital Name
            </label>
            <input
              type="text"
              id="hospitalName"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Enter Hospital Name"
              required
            />
          </div>

          {/* Hospital Address */}
          <div>
            <label htmlFor="hospitalAddress" className="block text-sm font-medium text-gray-700">
              Hospital Address
            </label>
            <textarea
              id="hospitalAddress"
              name="hospitalAddress"
              value={formData.hospitalAddress}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Enter Hospital Address"
              required
            ></textarea>
          </div>

          {/* Pincode */}
          <div>
            <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">
              Pincode
            </label>
            <input
              type="number"
              id="pinCode"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Enter Pincode"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md shadow-md hover:bg-red-700"
          >
            Find Donors
          </button>
        </div>
      </form>

      {/* Display Error */}
      {error && (
        <div className="mt-4 bg-red-100 text-red-600 px-4 py-2 rounded-md">
          {error}
        </div>
      )}

      {/* Display Response in Table */}
      {response && (
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Nearest Donors</h2>
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {response.donars.map((donor, index) => (
                <tr key={index} className="bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{donor.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{donor.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BloodRequestForm;
