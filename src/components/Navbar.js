// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Menu, X, Briefcase } from 'lucide-react';
// // You can use any icon library

// const Navbar = () => {
//   const { pathname } = useLocation();
//   const navigate = useNavigate();

//   const [userName, setUserName] = useState('');
// const [userRole, setUserRole] = useState('');

//   const [menuOpen, setMenuOpen] = useState(false);

// useEffect(() => {
//   const storedName = localStorage.getItem('userName');
//   const storedRole = localStorage.getItem('userRole');
//   if (storedName) setUserName(storedName);
//   if (storedRole) setUserRole(storedRole);
// }, []);


//   const navItemClass = (path) =>
//     `text-sm px-4 py-2 rounded-md transition w-full text-left ${
//       pathname === path ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
//     }`;

//   const handleLogout = () => {
//     localStorage.removeItem('userName');
//     setUserName('');
//     navigate('/login');
//     setMenuOpen(false);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       {/* Hamburger Menu for Mobile */}
//       <div className="md:hidden fixed top-4 left-4 z-50">
//         <button onClick={toggleMenu} className="p-2 bg-blue-600 text-white rounded">
//           {menuOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {/* Sidebar */}
//       <nav
//         className={`
//           bg-white shadow-md h-screen w-60 fixed top-0 z-40 flex flex-col justify-between transition-transform
//           ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
//           md:translate-x-0 md:static
//         `}
//       >
//         {/* Top Section */}
//         <div className="p-4">
//           <div className="text-xl font-bold text-blue-600 mb-6">
//             <Link to="/" onClick={() => setMenuOpen(false)}>JobBoard</Link>
//           </div>

//           <div className="flex flex-col space-y-2">
//             {!userName && (
//               <>
//                 <Link to="/register" className={navItemClass('/register')} onClick={() => setMenuOpen(false)}>
//                   Register
//                 </Link>
//                 <Link to="/login" className={navItemClass('/login')} onClick={() => setMenuOpen(false)}>
//                   Login
//                 </Link>
//               </>
//             )}

//             <Link to="/post-job" className={navItemClass('/post-job')} onClick={() => setMenuOpen(false)}>
//               Post Job
//             </Link>
//             <Link to="/" className={navItemClass('/')} onClick={() => setMenuOpen(false)}>
//               Jobs
//             </Link>
//             <Link to="/employer/applications" className={navItemClass('/employer/applications')}>View Applications</Link>
//              {/* {userName && (
//     <Link to="/chat" className={navItemClass('/chat')} onClick={() => setMenuOpen(false)}>
//       Chat Room
//     </Link>
//   )} */}
//   <Link to="/chat" className={navItemClass('/chat')} onClick={() => setMenuOpen(false)}>
//   Chat Room
// </Link>

//             {userRole === 'employer' && (
//   <Link
//     to="/employer/applications"
//     className={navItemClass('/employer/applications')}
//     onClick={() => setMenuOpen(false)}
//   >
//     <div className="flex items-center gap-2">
//       <Briefcase size={16} />
//       Applications
//     </div>
//   </Link>
// )}
            
//           </div>
//         </div>

//         {/* Bottom Section */}
//         {userName && (
//           <div className="p-4 border-t flex flex-col space-y-2">
//             <span className="text-gray-800 font-medium">👤 {userName}</span>
//             <button
//               onClick={handleLogout}
//               className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Menu, X, Briefcase } from 'lucide-react';

// const Navbar = () => {
//   const { pathname } = useLocation();
//   const navigate = useNavigate();

//   const [userName, setUserName] = useState('');
//   const [userRole, setUserRole] = useState('');
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const storedName = localStorage.getItem('userName');
//     const storedRole = localStorage.getItem('userRole');
//     if (storedName) setUserName(storedName);
//     if (storedRole) setUserRole(storedRole);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('userName');
//     localStorage.removeItem('userRole');
//     setUserName('');
//     setUserRole('');
//     navigate('/login');
//     setMenuOpen(false);
//   };

//   const navItemClass = (path) =>
//     `block px-4 py-2 text-sm rounded-md ${
//       pathname === path
//         ? 'text-white bg-blue-600'
//         : 'text-gray-700 hover:bg-gray-100'
//     }`;

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-xl font-bold text-blue-600">
//           <Link to="/" onClick={() => setMenuOpen(false)}>JobBoard</Link>
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center space-x-4">
//           {!userName && (
//             <>
//               <Link to="/register" className={navItemClass('/register')}>Register</Link>
//               <Link to="/login" className={navItemClass('/login')}>Login</Link>
//             </>
//           )}

//           <Link to="/" className={navItemClass('/')}>Jobs</Link>
//           <Link to="/post-job" className={navItemClass('/post-job')}>Post Job</Link>
//           <Link to="/chat" className={navItemClass('/chat')}>Chat</Link>

//           {userRole === 'employer' && (
//             <Link to="/employer/applications" className={navItemClass('/employer/applications')}>
//               <div className="flex items-center gap-1">
//                 <Briefcase size={16} /> Applications
//               </div>
//             </Link>
//           )}

//           {userName && (
//             <>
//               <span className="text-gray-800 font-medium">👤 {userName}</span>
//               <button
//                 onClick={handleLogout}
//                 className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-800 p-2 rounded"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-2">
//           {!userName && (
//             <>
//               <Link to="/register" className={navItemClass('/register')} onClick={() => setMenuOpen(false)}>Register</Link>
//               <Link to="/login" className={navItemClass('/login')} onClick={() => setMenuOpen(false)}>Login</Link>
//             </>
//           )}

//           <Link to="/" className={navItemClass('/')} onClick={() => setMenuOpen(false)}>Jobs</Link>
//           <Link to="/post-job" className={navItemClass('/post-job')} onClick={() => setMenuOpen(false)}>Post Job</Link>
//           <Link to="/chat" className={navItemClass('/chat')} onClick={() => setMenuOpen(false)}>Chat</Link>

//           {userRole === 'employer' && (
//             <Link to="/employer/applications" className={navItemClass('/employer/applications')} onClick={() => setMenuOpen(false)}>
//               <div className="flex items-center gap-1">
//                 <Briefcase size={16} /> Applications
//               </div>
//             </Link>
//           )}

//           {userName && (
//             <>
//               <span className="text-gray-800 font-medium block">👤 {userName}</span>
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Briefcase, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    const storedRole = localStorage.getItem('userRole');
    if (storedName) setUserName(storedName);
    if (storedRole) setUserRole(storedRole);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    setUserName('');
    setUserRole('');
    setMenuOpen(false);
    navigate('/login');
  };

  const navItemClass = (path) =>
    `block px-4 py-2 text-sm rounded-md ${
      pathname === path
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
    }`;

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
          <Link to="/" onClick={() => setMenuOpen(false)}>JobBoard</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          {!userName && (
            <>
              <Link to="/register" className={navItemClass('/register')}>Register</Link>
              <Link to="/login" className={navItemClass('/login')}>Login</Link>
            </>
          )}

          <Link to="/" className={navItemClass('/')}>Jobs</Link>
          <Link to="/post-job" className={navItemClass('/post-job')}>Post Job</Link>
          <Link to="/chat" className={navItemClass('/chat')}>Chat</Link>

          {userRole === 'employer' && (
            <Link to="/employer/applications" className={navItemClass('/employer/applications')}>
              <div className="flex items-center gap-1">
                <Briefcase size={16} /> Applications
              </div>
            </Link>
          )}

          {userName && (
            <>
              <span className="text-gray-800 dark:text-gray-200 font-medium">👤 {userName}</span>
              <button
                onClick={handleLogout}
                className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}

          {/* 🌙 Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-gray-200 p-2 rounded"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {!userName && (
            <>
              <Link to="/register" className={navItemClass('/register')} onClick={() => setMenuOpen(false)}>Register</Link>
              <Link to="/login" className={navItemClass('/login')} onClick={() => setMenuOpen(false)}>Login</Link>
            </>
          )}

          <Link to="/" className={navItemClass('/')} onClick={() => setMenuOpen(false)}>Jobs</Link>
          <Link to="/post-job" className={navItemClass('/post-job')} onClick={() => setMenuOpen(false)}>Post Job</Link>
          <Link to="/chat" className={navItemClass('/chat')} onClick={() => setMenuOpen(false)}>Chat</Link>

          {userRole === 'employer' && (
            <Link to="/employer/applications" className={navItemClass('/employer/applications')} onClick={() => setMenuOpen(false)}>
              <div className="flex items-center gap-1">
                <Briefcase size={16} /> Applications
              </div>
            </Link>
          )}

          {userName && (
            <>
              <span className="text-gray-800 dark:text-gray-200 font-medium block">👤 {userName}</span>
              <button
                onClick={handleLogout}
                className="w-full text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}

          {/* 🌙 Dark Mode Toggle (Mobile) */}
          <button
            onClick={toggleDarkMode}
            className="w-full text-left text-sm px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
