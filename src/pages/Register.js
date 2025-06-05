import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // ✅ Correct import

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

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential); // ✅ Correct usage
      const { name, email } = decoded;

      await axios.post('http://localhost:5000/api/auth/google-register', {
        name,
        email,
        password: 'google_oauth_user', // Optional: handled on server
        role: 'seeker'
      });

      localStorage.setItem('userName', name);
      alert('🎉 Registered with Google successfully!');
      navigate('/login');
    } catch (err) {
      setError(err?.response?.data?.message || 'Google registration failed.');
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

        <div className="flex flex-col items-center mt-6">
  <p className="text-sm text-gray-500 mb-2">or sign up with</p>
  <GoogleLogin
    onSuccess={handleGoogleSuccess}
    onError={() => setError('Google Sign-In failed.')}
  />
</div>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
