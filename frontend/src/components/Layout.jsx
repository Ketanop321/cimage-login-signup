import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  // Set document title and meta description
  useEffect(() => {
    document.title = 'CIMAGE - Excellence in Education';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'CIMAGE is a premier educational institution offering top-notch IT & Management courses with outstanding placement records.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
