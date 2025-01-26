import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="bg-pink-500 text-white py-6">
  <div class="container mx-auto flex justify-between items-center">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:text-gray-300">Home</a></li>
        <li><a onClick={() => scrollToSection("about")} class="hover:text-gray-300">About us</a></li>
        <Link><a href="#" class="hover:text-gray-300">Products</a></Link>
        <li><a href="#" class="hover:text-gray-300">Documents</a></li>
        <li><a href="#" class="hover:text-gray-300">News</a></li>
        <li><a href="#" class="hover:text-gray-300">Contacts</a></li>
      </ul>
    </nav>
    <div class="flex space-x-4">
      <a href="#" class="hover:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </a>
      <a href="#" class="hover:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </a>
      <a href="#" class="hover:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </a>
    </div>
  </div>
</footer>
    );
};

export default Footer;