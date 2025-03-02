import React, { useState } from "react";
import { Loader2 } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id === "name" ? "firstName" : id === "lnamed" ? "lastName" : id]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age <= 0) {
      newErrors.age = "Age must be a positive number";
    } else if (formData.age < 18) {
      newErrors.age = "You must be at least 18 years old";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        alert("Registration successful!");

        setFormData({
          firstName: "",
          lastName: "",
          age: "",
          email: "",
          password: "",
        });
      }, 1500);
    }
  };

  return (
    <>
      <form
        className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[15rem] mx-auto  pb-4 max-h-max"
        onSubmit={handleSubmit}
      >
        <h2 className="pt-16 max-w-6xl text-[2rem] text-white font-medium mb-4 ">
          Registration form
        </h2>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="name"
            value={formData.firstName}
            onChange={handleChange}
            className={`bg-gray-50 text-black text-sm rounded-lg focus:ring-[#184A62] duration-200 focus:ring-4 outline-none block w-full p-2.5 ${
              errors.firstName ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="lnamed"
            className="block mb-2 text-sm font-medium text-white"
          >
            Last name
          </label>
          <input
            type="text"
            id="lnamed"
            value={formData.lastName}
            onChange={handleChange}
            className={`bg-gray-50 text-black text-sm rounded-lg focus:ring-[#184A62] duration-200 focus:ring-4 outline-none block w-full p-2.5 ${
              errors.lastName ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="age"
            className="block mb-2 text-sm font-medium text-white"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={handleChange}
            className={`bg-gray-50 text-black text-sm rounded-lg focus:ring-[#184A62] duration-200 focus:ring-4 outline-none block w-full p-2.5 ${
              errors.age ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-500">{errors.age}</p>
          )}
        </div>
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
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Registering...
            </>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </>
  );
}
