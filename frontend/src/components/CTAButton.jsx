import React from "react";
import { Link } from "react-router-dom";

export default function CTAButton({ 
  children, 
  to, 
  href, 
  icon = null,
  iconPosition = "left",
  variant = "filled",
  className = ""
}) {
  // Determine base styles based on variant
  const baseStyles = {
    filled: "bg-white text-sky-700 hover:bg-sky-50",
    outline: "bg-white text-sky-600 border border-sky-600 hover:bg-sky-50 hover:shadow-sky-100",
    transparent: "bg-transparent text-white border border-white hover:bg-sky-700"
  };
  
  // Common styles for all buttons
  const commonStyles = "px-6 py-3 rounded-lg flex items-center gap-2 transform hover:-translate-y-1 transition-all duration-300";
  
  // Shadow styles based on variant
  const shadowStyles = variant === "transparent" ? "" : "shadow-lg";
  
  // Combine all styles
  const buttonStyles = `${commonStyles} ${baseStyles[variant]} ${shadowStyles} ${className}`;

  // Arrange icon based on position
  const content = iconPosition === "right" 
    ? <>{children} {icon}</> 
    : <>{icon} {children}</>;
  
  // Render either a Link or anchor based on props
  if (to) {
    return (
      <Link to={to} className={buttonStyles}>
        {content}
      </Link>
    );
  }
  
  return (
    <a href={href} className={buttonStyles}>
      {content}
    </a>
  );
}
