//C:\react-js\myreactdev\src\App.js
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// Layout
import Layout from './components/Layout';
// Pages
const LandingPage = React.lazy(() => import("./pages/Landingpage"));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));
const AboutPage = React.lazy(() => import('./pages/Aboutpage'));
const ProgrammePage = React.lazy(() => import('./pages/Programmepage'));
const CampusLifePage = React.lazy(() => import('./pages/CampusPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));


// Wrapper component for pages that need the layout
const PublicRoute = ({ element: Element }) => (
  <Layout>
    <Element />
  </Layout>
);

// Wrapper for auth pages (login/register) that don't use the layout
const AuthRoute = ({ element: Element }) => <Element />;

function App() {
  return (
    <div className="app">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public routes with layout */}
          <Route path="/" element={<PublicRoute element={LandingPage} />} />
          <Route path="/about" element={<PublicRoute element={AboutPage} />} />
          <Route path="/programme" element={<PublicRoute element={ProgrammePage} />} />
          <Route path="/campuslife" element={<PublicRoute element={CampusLifePage} />} />
          <Route path="/contact" element={<PublicRoute element={ContactPage} />} />
          
          {/* Auth routes without layout */}
          <Route path="/login" element={<AuthRoute element={LoginPage} />} />
          <Route path="/register" element={<AuthRoute element={RegisterPage} />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;