import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube
} from 'lucide-react';
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer id="Footer"
    className="bg-gray-900 text-white p-20">
      <div className="container items-center self-center place-content-center mx-auto grid md:grid-cols-3 gap-8">
        {/* Company Information */}
        <div>
          <h4 className="text-xl font-bold mb-4">Company Information</h4>
          <div className="space-y-2">
            <h5 className="font-semibold">About Us</h5>
            <p className="text-sm text-gray-300">
              We are a dedicated organization committed to saving lives through blood donation and community support.
            </p>
            <h5 className="font-semibold mt-2">Contact Us</h5>
            <div className="text-sm text-gray-300 space-y-1">
              <div className="flex items-center">
                <Mail className="mr-2 w-4 h-4" />
                <span>contact@bloodsupport.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 w-4 h-4" />
                <span>0300 123 23 23</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 w-4 h-4" />
                <span>123 Donation Street, City, State 12345</span>
              </div>
            </div>
            <div className="text-sm mt-2 space-x-4">
              <a href="/terms" className="hover:text-red-500">Terms & Conditions</a>
              <a href="/privacy" className="hover:text-red-500">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <nav className="space-y-2">
            <div><a href="/" className="text-gray-300 hover:text-red-500">Home</a></div>
            <div><a href="/registration" className="text-gray-300 hover:text-red-500">Blood Donation</a></div>
            <div><a href="/faqs" className="text-gray-300 hover:text-red-500">FAQs</a></div>
            <div><a href="/support" className="text-gray-300 hover:text-red-500">Support</a></div>
          </nav>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/givebloodnhs/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com/GiveBloodNHS" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500">
              <Twitter size={24} />
            </a>
            <a href="https://www.instagram.com/givebloodnhs/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500">
              <Instagram size={24} />
            </a>
            <a href="https://www.youtube.com/user/NHSGiveBlood" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500">
              <Youtube size={24} />
            </a>
          </div>
        </div>

       
      </div>

      {/* Copyright Notice */}
      <div className="text-center text-gray-400 mt-8 pt-4 border-t border-gray-800 text-sm">
        © 2024 Blood Support Network. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;