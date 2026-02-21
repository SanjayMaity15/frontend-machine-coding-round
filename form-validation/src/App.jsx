import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "./validators/authValidation";

const App = () => {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState({});

  function handleRegisterForm(formData) {
    const { success, data, error } = registerSchema.safeParse(formData);

    if (!success) {
      const newErrorObj = {};
      error?.issues?.forEach((err) => {
        newErrorObj[err.path[0]] = err.message;
      });
      setErrors(newErrorObj);
      
    } else {
      setErrors({});
      console.log("Form submitted successfully:", data);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(handleRegisterForm)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="pass" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="pass"
            {...register("password")}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;