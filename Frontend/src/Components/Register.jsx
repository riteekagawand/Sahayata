import React, { useState } from 'react';
import bg from '../assets/registerbg.jpg';

const Register = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    bloodGroup: '',
    height: '',
    weight: '',
    email: '',
    phone: '',
    address: '',
    location: '',
    password: '',
  });

  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      const userExists = users.find((user) => user.email === formData.email);
      if (userExists) {
        setErrorMessage('User already exists with this email.');
        return;
      }

      setUsers([...users, { ...formData, password: formData.password }]);
      console.log('User registered:', formData);
    } else {
      const user = users.find(
        (user) => user.email === formData.email && user.password === formData.password
      );
      if (!user) {
        setErrorMessage('Invalid email or password.');
        return;
      }

      console.log('User logged in:', user);
    }

    setFormData({
      name: '',
      age: '',
      gender: '',
      bloodGroup: '',
      height: '',
      weight: '',
      email: '',
      phone: '',
      address: '',
      location: '',
      password: '',
    });
    setErrorMessage('');
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Red Border around the form */}
      <div className="relative w-full max-w-lg p-8 rounded-lg shadow-xl h-full overflow-hidden">
        {/* Background Image */}
        <img
          src={bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-25 contrast-75"
        />

        {/* Form container */}
        <div className="relative w-full bg-transparent p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            {isRegistering ? 'Volunteer Registration' : 'Login'}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}
            {isRegistering && (
              <>
                {/* Name and Age */}
                <div className="flex space-x-4">
                  <div className="flex-grow">
                    <label className="block text-black font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="w-1/4">
                    <label className="block text-black font-medium">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Gender (Dropdown) */}
                <div>
                  <label className="block text-black font-medium">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Add other fields like Blood Group, Height, Weight, Email, Phone, Address, Location */}
                {/* Blood Group, Height, and Weight */}
              <div className="flex space-x-4">
                <div className="flex-grow">
                  <label className="block text-black font-medium">Blood Group</label>
                  <input
                    type="text"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="w-1/4">
                  <label className="block text-black font-medium">Height (cm)</label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="w-1/4">
                  <label className="block text-black font-medium">Weight (kg)</label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Email and Phone Number */}
              <div className="flex space-x-4">
                <div className="flex-grow">
                  <label className="block text-black font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <label className="block text-black font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Address and Location */}
              <div className="flex space-x-4">
                <div className="flex-grow">
                  <label className="block text-black font-medium">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <div className="flex-grow">
                  <label className="block text-black font-medium">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {!isRegistering && (
            <>
              {/* Email and Password for Login */}
              <div className="space-y-4">
                <div>
                  <label className="block text-black font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-black font-medium">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </>
          )}

            {!isRegistering && (
              <>
                
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isRegistering ? 'Register' : 'Login'}
            </button>

            {/* Toggle between Register and Login */}
            <div className="text-center mt-4">
              <span className="text-black font-medium">
                {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
              </span>
              <button
                type="button"
                className="text-black font- hover:underline"
                onClick={() => setIsRegistering(!isRegistering)}
              >
                {isRegistering ? 'Login' : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
