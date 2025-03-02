import React, { useState } from "react";
import { Loader2 } from "lucide-react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        // Handle successful login here
        setIsSubmitting(false);
        alert("Login successful!");
        // Reset form after successful submission
        setFormData({
          email: "",
          password: ""
        });
      }, 1500);
    }
  };

  return (
    <>
      <form 
        className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[15rem] mx-auto h-screen"
        onSubmit={handleSubmit}
      >
        <h2 className="pt-16 max-w-6xl text-[2rem] text-white font-medium mb-4 ">
          Login form
        </h2>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`bg-gray-50 text-black text-sm rounded-lg focus:ring-[#184A62] duration-200 focus:ring-4 outline-none block w-full p-2.5 ${
              errors.email ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={`bg-gray-50 text-black text-sm rounded-lg focus:ring-[#184A62] duration-200 focus:ring-4 outline-none block w-full p-2.5 ${
              errors.password ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="text-black bg-[#0DCAF0] hover:bg-[#31D2F2] duration-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
}