import React from "react";

export default function Footer({ currentYear }) {
  const quickLinks = [
    { label: "Programs", href: "#" },
    { label: "Admissions", href: "#" },
    { label: "Student Life", href: "#" },
    { label: "Resources", href: "#" }
  ];
  
  const socialLinks = [
    { 
      name: "Facebook", 
      href: "#", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      name: "Twitter", 
      href: "#", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "#", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.808.06 1.064.05 1.79.215 2.427.465.66.254 1.216.598 1.772 1.153a4.81 4.81 0 011.153 1.772c.25.637.415 1.363.465 2.427.047 1.024.06 1.379.06 3.808s-.01 2.784-.06 3.808c-.05 1.064-.215 1.79-.465 2.427a4.81 4.81 0 01-1.153 1.772 4.81 4.81 0 01-1.772 1.153c-.637.25-1.363.415-2.427.465-1.024.047-1.379.06-3.808.06s-2.784-.01-3.808-.06c-1.064-.05-1.79-.215-2.427-.465a4.81 4.81 0 01-1.772-1.153 4.81 4.81 0 01-1.153-1.772c-.25-.637-.415-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808s.01-2.784.06-3.808c.05-1.064.215-1.79.465-2.427a4.81 4.81 0 011.153-1.772A4.81 4.81 0 014.08 2.525c.637-.25 1.363-.415 2.427-.465 1.024-.047 1.379-.06 3.808-.06zm0 1.44c-2.136 0-2.39.01-3.233.048-.784.036-1.211.167-1.496.276-.376.145-.645.319-.92.594a2.38 2.38 0 00-.594.92c-.11.285-.24.712-.276 1.496-.038.844-.048 1.097-.048 3.233s.01 2.39.048 3.233c.036.784.167 1.211.276 1.496.145.376.319.645.594.92.28.28.546.453.92.594.285.11.712.24 1.496.276.844.038 1.097.048 3.233.048s2.39-.01 3.233-.048c.784-.036 1.211-.167 1.496-.276.376-.145.645-.319.92-.594.28-.28.453-.546.594-.92.11-.285.24-.712.276-1.496.038-.844.048-1.097.048-3.233s-.01-2.39-.048-3.233c-.036-.784-.167-1.211-.276-1.496a2.38 2.38 0 00-.594-.92 2.38 2.38 0 00-.92-.594c-.285-.11-.712-.24-1.496-.276-.844-.038-1.097-.048-3.233-.048z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.315 6.863a5.137 5.137 0 100 10.275 5.137 5.137 0 000-10.275zm0 8.468a3.331 3.331 0 110-6.662 3.331 3.331 0 010 6.662zm6.541-8.672a1.2 1.2 0 10-2.4 0 1.2 1.2 0 002.4 0z" clipRule="evenodd" />
        </svg>
      )
    }
  ];
  
  return (
    <footer className="bg-sky-900 text-sky-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">cimage</h4>
            <p className="text-sky-200">Empowering students to achieve their dreams through quality education.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sky-200 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-sky-200">
              <p>123 Education Ave</p>
              <p>College Town, ST 12345</p>
              <p>info@campusconnect.edu</p>
              <p>(123) 456-7890</p>
            </address>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-sky-200 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-sky-800 text-center">
          <p className="text-sm text-sky-300">
            &copy; {currentYear} ct. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}