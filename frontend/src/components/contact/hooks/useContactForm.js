//custom hooks

import { useState } from 'react';

const useContactForm = () => {
  const initialFormState = {
    course: '',
    name: '',
    email: '',
    mobile: '',
    fatherName: '',
    motherName: '',
    aadhaar: '',
    voterId: '',
    parentContact: '',
    dob: '',
    gender: '',
    category: '',
    country: 'India',
    state: '',
    city: '',
    zip: '',
    captchaAnswer: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData(initialFormState);
      setIsSubmitted(false);
    }, 5000);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitted,
  };
};

export default useContactForm;