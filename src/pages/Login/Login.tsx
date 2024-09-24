import React from "react";

const logo = "../src/assets/logo/logo-dark.png";
const animationLogo = "../src/assets/logo/logo-light.png";

export default function Login({ onLogin }: { onLogin: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-custom-blue relative">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 relative z-10">
        <div className="absolute top-0 left-0 right-0 transform -translate-y-1/2">
          <img src={logo} alt="Logo" className="mx-auto h-16 w-16 logo" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-8 mt-16">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 transition duration-150 ease-in-out"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 transition duration-150 ease-in-out"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Login
          </button>
        </form>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <img
          src={animationLogo}
          alt="Logo"
          className="h-50 w-50 animationLogo opacity-50"
        />
      </div>
    </div>
  );
}
