import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10 p-6 text-center">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0 text-sm">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} JobBoard Inc. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          <Link to="/faq" className="hover:text-gray-400">FAQ</Link>
          <Link to="/terms" className="hover:text-gray-400">Terms</Link>
          <Link to="/privacy" className="hover:text-gray-400">Privacy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
