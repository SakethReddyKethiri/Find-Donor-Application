import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrganizationLogin = () => {
  // State management for login form
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  // State for error handling
  const [error, setError] = useState('');

  // State for success handling
  const [success, setSuccess] = useState('');
  
  // Navigation hook for routing
  const navigate = useNavigate();

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Login submission handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Validate required fields
      const requiredFields = ['username', 'password'];
      for (const field of requiredFields) {
        if (!loginData[field]) {
          setError(`Please enter your ${field}`);
          return;
        }
      }

      // Simulated API call (replace with actual authentication endpoint)
      const response = await axios.post('http://localhost:9000/organization/login', loginData);

      if (response.status === 200) {
        // Store user details in localStorage
        const organization = response.data;
        console.log(organization);
        localStorage.setItem('organization', JSON.stringify(organization));

        // Set success message
        setSuccess('Login successful! Redirecting...');

        // Redirect to organization dashboard
        setTimeout(() => navigate('/'), 2000);
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (err) {
      if (err.response) {
        // Handle errors returned by the server
        setError(err.response.data.message || 'Invalid credentials');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl border border-red-50">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-red-800">
            Organization Login Portal
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Securely access your donor account
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-md" role="alert">
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-md" role="alert">
            <p className="text-sm">{success}</p>
          </div>
        )}

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            {/* Username Input */}
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your username"
                value={loginData.username}
                onChange={handleChange}
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-101"
            >
              Login
            </button>
          </div>

          {/* Additional Links */}
          <div className="flex justify-between text-sm">
            <a 
              href="/signup" 
              className="text-red-600 hover:text-red-800 transition duration-300"
            >
              Create an Account
            </a>
            <a 
              href="/forgot-password" 
              className="text-gray-600 hover:text-red-600 transition duration-300"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrganizationLogin;