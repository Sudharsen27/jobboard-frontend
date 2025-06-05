// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Eye, EyeOff, Mail, Lock, Sparkles } from 'lucide-react';

// const Login = () => {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [focusedField, setFocusedField] = useState('');
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const navigate = useNavigate();

//   // Mouse tracking for dynamic background effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setError(''); // clear error on input change
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       setError('Please enter both email and password.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', form);
//       localStorage.setItem('token', res.data.token);
//       setError('');
//       navigate('/post-job'); // Redirect to Post Job page after successful login
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const backgroundStyle = {
//     background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 25%, rgba(16, 185, 129, 0.1) 50%, transparent 70%)`,
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Dynamic background */}
//       <div 
//         className="absolute inset-0 transition-all duration-300 ease-out"
//         style={backgroundStyle}
//       />
      
//       {/* Floating orbs */}
//       <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
//       <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
//       <div className="absolute top-1/2 left-10 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

//       {/* Login container with glassmorphism */}
//       <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-[1.02] hover:bg-white/15 w-full max-w-md">
        
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center gap-2 mb-2">
//             <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
//             <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
//               Login
//             </h2>
//             <Sparkles className="w-6 h-6 text-blue-400 animate-pulse delay-500" />
//           </div>
//         </div>

//         <form onSubmit={handleLogin} className="space-y-6">
//           {/* Email field */}
//           <div className="relative group">
//             <label 
//               htmlFor="email" 
//               className="block text-sm font-medium text-gray-200 mb-2 transition-colors group-focus-within:text-purple-400"
//             >
//               Email:
//             </label>
//             <div className="relative">
//               <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
//                 focusedField === 'email' ? 'text-purple-400' : 'text-gray-400'
//               }`} />
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField('email')}
//                 onBlur={() => setFocusedField('')}
//                 placeholder="Email"
//                 required
//                 className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:scale-[1.02] ${
//                   focusedField === 'email' 
//                     ? 'border-purple-400 shadow-lg shadow-purple-500/25 bg-white/10' 
//                     : 'border-white/20 hover:border-white/30'
//                 }`}
//               />
//             </div>
//           </div>

//           {/* Password field */}
//           <div className="relative group">
//             <label 
//               htmlFor="password" 
//               className="block text-sm font-medium text-gray-200 mb-2 transition-colors group-focus-within:text-purple-400"
//             >
//               Password:
//             </label>
//             <div className="relative">
//               <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
//                 focusedField === 'password' ? 'text-purple-400' : 'text-gray-400'
//               }`} />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 id="password"
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField('password')}
//                 onBlur={() => setFocusedField('')}
//                 placeholder="Password"
//                 required
//                 className={`w-full pl-12 pr-12 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:scale-[1.02] ${
//                   focusedField === 'password' 
//                     ? 'border-purple-400 shadow-lg shadow-purple-500/25 bg-white/10' 
//                     : 'border-white/20 hover:border-white/30'
//                 }`}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
//               >
//                 {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//               </button>
//             </div>
//           </div>

//           {/* Error message with animation */}
//           {error && (
//             <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 animate-pulse">
//               <div className="text-red-400 text-sm text-center">{error}</div>
//             </div>
//           )}

//           {/* Login button */}
//           <button 
//             type="submit" 
//             disabled={loading}
//             className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:scale-[1.02] ${
//               loading
//                 ? 'bg-gray-600 cursor-not-allowed'
//                 : 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 shadow-lg hover:shadow-purple-500/50 active:scale-[0.98]'
//             }`}
//           >
//             {loading ? (
//               <div className="flex items-center justify-center gap-2">
//                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                 Logging in...
//               </div>
//             ) : (
//               <span className="flex items-center justify-center gap-2">
//                 Login
//                 <Sparkles className="w-4 h-4" />
//               </span>
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Sparkles } from 'lucide-react';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [userName, setUserName] = useState(null); // <-- new state for user name
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);

      // Assuming response has a user object with name
      // For example: res.data = { token: "...", user: { name: "John Doe", email: "..." } }

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userName', res.data.user.name);  // Save user name to localStorage

      setUserName(res.data.user.name);  // Set user name in state to display immediately
      setError('');
      
      // Navigate after short delay or immediately
      setTimeout(() => {
        navigate('/post-job');
      }, 1500); 

    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const backgroundStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 25%, rgba(16, 185, 129, 0.1) 50%, transparent 70%)`,
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div 
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={backgroundStyle}
      />
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-[1.02] hover:bg-white/15 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Login
            </h2>
            <Sparkles className="w-6 h-6 text-blue-400 animate-pulse delay-500" />
          </div>
        </div>

        {/* If user is logged in, show welcome message */}
        {userName ? (
          <div className="text-white text-center text-xl font-semibold">
            Welcome, <span className="text-purple-400">{userName}</span>! Redirecting...
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email field */}
            <div className="relative group">
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-200 mb-2 transition-colors group-focus-within:text-purple-400"
              >
                Email:
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                  focusedField === 'email' ? 'text-purple-400' : 'text-gray-400'
                }`} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Email"
                  required
                  className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:scale-[1.02] ${
                    focusedField === 'email' 
                      ? 'border-purple-400 shadow-lg shadow-purple-500/25 bg-white/10' 
                      : 'border-white/20 hover:border-white/30'
                  }`}
                />
              </div>
            </div>

            {/* Password field */}
            <div className="relative group">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-200 mb-2 transition-colors group-focus-within:text-purple-400"
              >
                Password:
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                  focusedField === 'password' ? 'text-purple-400' : 'text-gray-400'
                }`} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Password"
                  required
                  className={`w-full pl-12 pr-12 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:scale-[1.02] ${
                    focusedField === 'password' 
                      ? 'border-purple-400 shadow-lg shadow-purple-500/25 bg-white/10' 
                      : 'border-white/20 hover:border-white/30'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error message with animation */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 animate-pulse">
                <div className="text-red-400 text-sm text-center">{error}</div>
              </div>
            )}

            {/* Login button */}
            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:scale-[1.02] ${
                loading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 shadow-lg hover:shadow-purple-500/50 active:scale-[0.98]'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Logging in...
                </div>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Login
                  <Sparkles className="w-4 h-4" />
                </span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
