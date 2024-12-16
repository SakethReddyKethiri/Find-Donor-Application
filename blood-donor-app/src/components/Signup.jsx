import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrganizationSignup = () => {
  // State management for signup form
  const [signupData, setSignupData] = useState({
    username: '',
    password: '',
    organizationname: '',
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
    setSignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Signup submission handler
  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Validate required fields
      const requiredFields = [
        'username',
        'password',
        'organizationname',
        'mobile',
        'city',
        'state',
        'country',
        'pincode',
      ];
      for (const field of requiredFields) {
        if (!signupData[field]) {
          setError(`Please enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
          return;
        }
      }

      // Mobile number validation
      if (!/^\d{10}$/.test(signupData.mobile)) {
        setError('Please enter a valid 10-digit mobile number');
        return;
      }

      // Password validation
      if (signupData.password.length < 8) {
        setError('Password must be at least 8 characters long');
        return;
      }

      // API call using Axios
      const response = await axios.post('http://localhost:9000/organization/register', signupData);

      if (response.status === 200) {
        setSuccess(response.data); // Success message from the backend
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (err) {
      if (err.response) {
        // Handle errors returned by the server
        setError(err.response.data || 'An error occurred during signup.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  // Form field configuration for dynamic rendering
  const formFields = [
    { name: 'username', type: 'text', placeholder: 'Username' },
    { name: 'password', type: 'password', placeholder: 'Password' },
    { name: 'organizationname', type: 'text', placeholder: 'Organization Name' },
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
            Organization Registration
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Register your organization to contribute to the community
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

        {/* Signup Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  value={signupData[field.name]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          {/* Signup Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-101"
            >
              Register Organization
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">
              Already registered?{' '}
              <a 
                href="/login" 
                className="font-medium text-red-600 hover:text-red-800 transition duration-300"
              >
                Log in here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrganizationSignup;
