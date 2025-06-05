import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'seeker' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password } = form;

    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
       localStorage.setItem('userName', name);
      alert('🎉 Registered successfully!');
      navigate('/login');
    } catch (err) {
      setError(err?.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Create an Account</h2>
        
        <form onSubmit={handleRegister} className="space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="seeker">Seeker</option>
            <option value="employer">Employer</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
