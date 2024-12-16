import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BloodDonorRegistration = () => {
  // State management for donor registration form
  const [donorData, setDonorData] = useState({
    name: '',
    bloodGroup: '',
    email: '',
    mobile: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  });

  // State for error and success handling
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Navigation hook for routing
  const navigate = useNavigate();

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonorData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Registration submission handler
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Validate required fields
      const requiredFields = ['name', 'bloodGroup', 'email', 'mobile', 'city', 'state', 'country', 'pincode'];
      for (const field of requiredFields) {
        if (!donorData[field]) {
          setError(`Please enter your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
          return;
        }
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(donorData.email)) {
        setError('Please enter a valid email address');
        return;
      }

      // Mobile number validation (basic)
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(donorData.mobile)) {
        setError('Please enter a valid 10-digit mobile number');
        return;
      }

      // Simulated API call for donor registration

      const response = await axios.post('http://localhost:9000/donor', donorData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('Registration response:', response.data);
      // Success handling
      setSuccess('Registration successful! Thank you for becoming a donor.');
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      setError(
        `Registration failed. Please try again.${error.response?.data ? ' ' + error.response.data : ''}`
      );
      
    }
  };

  // Blood group options
  const bloodGroups = [
    { value: '', label: 'Select Blood Group' },
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
  ];

  // Form field configuration
  const formFields = [
    { name: 'name', type: 'text', placeholder: 'Full Name' },
    { name: 'email', type: 'email', placeholder: 'Email Address' },
    { name: 'mobile', type: 'tel', placeholder: 'Mobile Number' },
    { name: 'city', type: 'text', placeholder: 'City' },
    { name: 'state', type: 'text', placeholder: 'State' },
    { name: 'country', type: 'text', placeholder: 'Country' },
    { name: 'pincode', type: 'text', placeholder: 'Pincode' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl border border-red-50">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-800">
            Become a Blood Donor
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your donation can save up to three lives. Join our mission today.
          </p>
        </div>

        {/* Error and Success Messages */}
        {error && (
          <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-md" role="alert">
            <p className="text-sm">{error}</p>
          </div>
        )}
        {success && (
          <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-md" role="alert">
            <p className="text-sm">{success}</p>
          </div>
        )}

        {/* Donor Registration Form */}
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Blood Group Dropdown */}
            <div className="md:col-span-2">
              <label htmlFor="bloodGroup" className="sr-only">
                Blood Group
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                required
                className="appearance-none block w-full px-4 py-3 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
                value={donorData.bloodGroup}
                onChange={handleChange}
              >
                {bloodGroups.map((group) => (
                  <option key={group.value} value={group.value}>
                    {group.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Dynamic Form Fields */}
            {formFields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="sr-only">
                  {field.placeholder}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
                  placeholder={field.placeholder}
                  value={donorData[field.name]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          {/* Register Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-101"
            >
              Register as a Blood Donor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BloodDonorRegistration;