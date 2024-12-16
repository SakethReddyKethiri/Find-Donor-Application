import React from 'react';
import Plasma from "../assets/plasma.jpg";
import { HeartPulse, Droplet, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Platelets from "../assets/platelets.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-red-50 to-white w-full min-h-[600px] p-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content Section */}
        <div className="space-y-6">
          <div className="bg-red-50 rounded-full inline-flex items-center px-4 py-2 text-red-600 font-medium">
            <Droplet className="mr-2 w-5 h-5" />
            Save Lives, Donate Blood
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Every Drop Counts: <br />Be a <span className="text-red-600">Lifesaving Hero</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Your single blood donation can save up to three lives. Join our compassionate community of donors and make a critical difference for patients in need of life-saving transfusions.
          </p>
          
          {/* Impact Statistics */}
          <div className="grid grid-cols-3 gap-4 py-4">
            <div className="bg-white border border-red-100 rounded-lg p-4 text-center shadow-sm">
              <HeartPulse className="mx-auto mb-2 text-red-600" size={32} />
              <span className="block font-bold text-gray-800">3987+</span>
              <span className="text-sm text-gray-600">Lives Saved</span>
            </div>
            <div className="bg-white border border-red-100 rounded-lg p-4 text-center shadow-sm">
              <Users className="mx-auto mb-2 text-red-600" size={32} />
              <span className="block font-bold text-gray-800">24/7</span>
              <span className="text-sm text-gray-600">Emergency Support</span>
            </div>
            <div className="bg-white border border-red-100 rounded-lg p-4 text-center shadow-sm">
              <Droplet className="mx-auto mb-2 text-red-600" size={32} />
              <span className="block font-bold text-gray-800">A, B, AB, O</span>
              <span className="text-sm text-gray-600">Blood Types</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <Link 
              to="/registration" 
              className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300 ease-in-out shadow-md"
            >
              Become a Donor
            </Link>
          
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-red-600 opacity-20 rounded-xl group-hover:opacity-30 transition-opacity duration-300"></div>
          <img 
            src={Plasma}
            alt="Blood Donation" 
            className="w-full h-[500px] rounded-xl object-cover shadow-2xl group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
            <p className="text-sm text-gray-800 font-medium">
              Join thousands of donors making a difference every day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;