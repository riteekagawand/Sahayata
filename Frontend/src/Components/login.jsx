import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const Login = ({ toggleForm }) => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Login Successful');
  };

  return (
    <div className='flex items-center justify-center p-4'>
      <div className='w-full max-w-md bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-2xl font-bold text-center mb-6'>LOGIN</h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='relative'>
            <input
              className='w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Email'
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
            />
            <MdMail className='absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400' />
          </div>
          <div className='relative'>
            <input
              className='w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Password'
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              required
            />
            <FaLock className='absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400' />
          </div>
          <button className='w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 focus:outline-none'>
            Login
          </button>
          <div className='text-center mt-4'>
            <span>
              Don't have an account?{' '}
              <span className='text-black font- cursor-pointer hover:underline' onClick={toggleForm}>
                Register
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
