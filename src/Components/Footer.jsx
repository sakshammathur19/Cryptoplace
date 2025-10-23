import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#1d152f] text-gray-300 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div className="flex flex-col gap-4">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="w-[120px]"
          />
          <p className="text-gray-400 text-sm">
            Track crypto prices, view trends, and stay updated with the latest in the crypto world.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-white text-lg mb-2">Navigation</h3>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/Blog" className="hover:text-white transition-colors">Blog</Link>
          <Link to="/" className="hover:text-white transition-colors">Features</Link>
          <Link to="/" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-white text-lg mb-2">Resources</h3>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
          <a href="#" className="hover:text-white transition-colors">Community</a>
          <a href="#" className="hover:text-white transition-colors">FAQs</a>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-white text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CryptoTracker. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
