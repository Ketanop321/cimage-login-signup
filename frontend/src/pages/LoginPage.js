import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff, FiAlertCircle, FiCheck } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Reset errors when inputs change
  useEffect(() => {
    const newErrors = { ...errors };
    
    if (touched.email) {
      if (email.length === 0) {
        newErrors.email = "Email is required";
      } else if (!isValidEmail(email)) {
        newErrors.email = "Please enter a valid email";
      } else {
        delete newErrors.email;
      }
    }
    
    if (touched.password) {
      if (password.length === 0) {
        newErrors.password = "Password is required";
      } else {
        delete newErrors.password;
      }
    }
    
    setErrors(newErrors);
  }, [email, password, touched]);

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Mark all fields as touched
    setTouched({
      email: true,
      password: true
    });
    
    if (email.length === 0) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (password.length === 0) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const logInUser = () => {
    if (validateForm()) {
      axios.post('http://127.0.0.1:5000/login', {
        email: email,
        password: password
      })
        .then(function (response) {
          console.log(response);
          navigate("/");
        })
        .catch(function (error) {
          console.log(error, 'error');
          if (error.response && error.response.status === 401) {
            setErrors({ form: "Invalid email or password" });
          } else {
            setErrors({ form: "Login failed. Please try again." });
          }
        });
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-[600px] mx-auto flex rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20">
        {/* Left Panel */}
        <div className="w-2/5 bg-blue-900 text-white p-8 relative overflow-hidden">
          {/* Light reflection effects */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-40 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"></div>
          
          {/* Content on top */}
          <div className="relative z-10">
            <h1 className="text-4xl font-bold tracking-wider text-white drop-shadow-md mb-2">CIMAGE</h1>
            <p className="text-xl text-white/90 drop-shadow-sm mb-8">Where Education Meets Excellence</p>
            
            <div className="mt-12 flex items-center justify-center">
              {/* Students on books illustration */}
              <svg viewBox="0 0 500 400" className="w-full">
                <rect x="100" y="300" width="300" height="30" rx="10" fill="#203864" />
                <rect x="120" y="270" width="260" height="30" rx="10" fill="#2e5496" />
                <rect x="140" y="240" width="220" height="30" rx="10" fill="#3a6fc5" />
                
                {/* Student 1 */}
                <circle cx="180" cy="200" r="30" fill="#ffb6c1" />
                <rect x="165" y="230" width="30" height="40" fill="#ffb6c1" />
                <rect x="155" y="250" width="20" height="30" fill="#87ceeb" />
                <rect x="185" y="250" width="20" height="30" fill="#87ceeb" />
                
                {/* Student 2 */}
                <circle cx="250" cy="180" r="30" fill="#f4a460" />
                <rect x="235" y="210" width="30" height="40" fill="#f4a460" />
                <rect x="225" y="230" width="20" height="30" fill="#3a6fc5" />
                <rect x="255" y="230" width="20" height="30" fill="#3a6fc5" />
                
                {/* Student 3 */}
                <circle cx="320" cy="200" r="30" fill="#e0e0e0" />
                <rect x="305" y="230" width="30" height="40" fill="#e0e0e0" />
                <rect x="295" y="250" width="20" height="30" fill="#ff7f50" />
                <rect x="325" y="250" width="20" height="30" fill="#ff7f50" />
                
                {/* Laptop */}
                <rect x="220" y="210" width="60" height="40" rx="5" fill="#333" />
                <rect x="225" y="215" width="50" height="30" rx="2" fill="#87ceeb" />
                
                {/* Books */}
                <rect x="170" y="260" width="30" height="10" fill="#ff7f50" />
                <rect x="300" y="260" width="30" height="10" fill="#ba55d3" />
              </svg>
            </div>
          </div>
          
          {/* Additional glassmorphism elements */}
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-10 w-16 h-16 bg-blue-200/20 rounded-full blur-md"></div>
        </div>

        {/* Right Panel - Login Form with Glassmorphism */}
        <div className="w-3/5 relative flex flex-col overflow-hidden">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-xl border-l border-white/40 shadow-lg"></div>
          
          {/* Light reflection effect */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-20 w-60 h-60 bg-blue-100/30 rounded-full blur-3xl"></div>
          
          {/* Content on top of glassmorphism */}
          <div className="relative z-10 flex flex-col h-full p-10">
            {/* Tab navigation */}
            <div className="w-full max-w-sm mx-auto mb-6">
              <div className="flex rounded-full overflow-hidden border border-white/40 bg-white/10 backdrop-blur-md">
                <button 
                  onClick={() => setActiveTab('login')}
                  className={`py-2 px-6 w-1/2 transition-all font-medium ${activeTab === 'login' ? 'bg-blue-900 text-white rounded-full' : 'bg-transparent text-gray-700'}`}
                >
                  Login
                </button>
                <button 
                  onClick={() => navigate('/register')}
                  className={`py-2 px-6 w-1/2 transition-all font-medium ${activeTab === 'signup' ? 'bg-blue-900 text-white rounded-full' : 'bg-transparent text-gray-700'}`}
                >
                  Signup
                </button>
              </div>
            </div>

            <div className="w-full max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Welcome back!</h2>
              
              {errors.form && (
                <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-800 rounded-lg flex items-center">
                  <FiAlertCircle className="mr-2" />
                  {errors.form}
                </div>
              )}
              
              <div className="space-y-5">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className={`h-5 w-5 ${errors.email ? 'text-red-500' : touched.email && !errors.email ? 'text-green-500' : 'text-gray-500'}`} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleBlur('email')}
                    className={`w-full pl-10 pr-10 py-4 bg-white/60 backdrop-blur-sm border shadow-sm rounded-lg
                      ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring focus:ring-red-200/50' : 
                        touched.email && !errors.email ? 'border-green-400 focus:border-green-500 focus:ring focus:ring-green-200/50' : 
                        'border-white/50 focus:border-blue-300 focus:ring focus:ring-blue-200/50'}`}
                    placeholder="Email"
                  />
                  {touched.email && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      {errors.email ? 
                        <FiAlertCircle className="h-5 w-5 text-red-500" /> : 
                        <FiCheck className="h-5 w-5 text-green-500" />
                      }
                    </div>
                  )}
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className={`h-5 w-5 ${errors.password ? 'text-red-500' : touched.password && !errors.password ? 'text-green-500' : 'text-gray-500'}`} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur('password')}
                    className={`w-full pl-10 pr-10 py-4 bg-white/60 backdrop-blur-sm border shadow-sm rounded-lg
                      ${errors.password ? 'border-red-400 focus:border-red-500 focus:ring focus:ring-red-200/50' : 
                        touched.password && !errors.password ? 'border-green-400 focus:border-green-500 focus:ring focus:ring-green-200/50' : 
                        'border-white/50 focus:border-blue-300 focus:ring focus:ring-blue-200/50'}`}
                    placeholder="Password"
                  />
                  <button 
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 
                      <FiEyeOff className="h-5 w-5 text-gray-500" /> : 
                      <FiEye className="h-5 w-5 text-gray-500" />
                    }
                  </button>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>
                
                <button
                  type="button"
                  onClick={logInUser}
                  className="w-full py-4 bg-blue-900 hover:bg-blue-800 transition-all text-white font-medium rounded-lg shadow-lg"
                >
                  Log in
                </button>
                
                <button
                  type="button"
                  className="w-full py-4 bg-white/80 hover:bg-gray-50 font-medium border border-gray-200/70 flex items-center justify-center gap-2 backdrop-blur-sm shadow-sm rounded-lg"
                >
                  <FcGoogle className="text-xl" /> Login with Google
                </button>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-gray-700">
                  New here? <a href="/register" className="text-blue-900 font-medium hover:underline">Create account</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}