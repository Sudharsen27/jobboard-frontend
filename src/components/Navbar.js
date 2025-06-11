
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const { pathname } = useLocation();

//   const navItemClass = (path) =>
//     `text-sm px-4 py-2 rounded-md transition ${
//       pathname === path ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
//     }`;

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//         <div className="text-xl font-bold text-blue-600">
//           <Link to="/">JobBoard</Link>
//         </div>

//         <div className="flex space-x-2">
//           <Link to="/register" className={navItemClass('/register')}>
//             Register
//           </Link>
//           <Link to="/login" className={navItemClass('/login')}>
//             Login
//           </Link>
//           <Link to="/post-job" className={navItemClass('/post-job')}>
//             Post Job
//           </Link>
//           <Link to="/" className={navItemClass('/')}>
//             Jobs
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const [userName, setUserName] = useState('');

//   useEffect(() => {
//     const name = localStorage.getItem('userName');
//     if (name) {
//       setUserName(name);
//     }
//   }, []);

//   const navItemClass = (path) =>
//     `text-sm px-4 py-2 rounded-md transition ${
//       pathname === path ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
//     }`;

//   const handleLogout = () => {
//     localStorage.removeItem('userName');
//     setUserName('');
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//         <div className="text-xl font-bold text-blue-600">
//           <Link to="/">JobBoard</Link>
//         </div>

//         <div className="flex items-center space-x-4">
//           <Link to="/register" className={navItemClass('/register')}>
//             Register
//           </Link>
//           <Link to="/login" className={navItemClass('/login')}>
//             Login
//           </Link>
//           <Link to="/post-job" className={navItemClass('/post-job')}>
//             Post Job
//           </Link>
//           <Link to="/" className={navItemClass('/')}>
//             Jobs
//           </Link>

//           {userName && (
//             <div className="flex items-center space-x-2 ml-4">
//               <span className="text-gray-800 font-medium">👤 {userName}</span>
//               <button
//                 onClick={handleLogout}
//                 className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const { pathname } = useLocation();
//   const navigate = useNavigate();

//   const [userName, setUserName] = useState('');

//   // Load user name from localStorage once when component mounts
//   useEffect(() => {
//     const storedName = localStorage.getItem('userName');
//     if (storedName) {
//       setUserName(storedName);
//     }
//   }, []);

//   // Helper to apply active styling on nav links
//   const navItemClass = (path) =>
//     `text-sm px-4 py-2 rounded-md transition ${
//       pathname === path ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
//     }`;

//   // Logout handler clears user info and redirects to login
//   const handleLogout = () => {
//     localStorage.removeItem('userName');
//     setUserName('');
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-xl font-bold text-blue-600">
//           <Link to="/">JobBoard</Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex items-center space-x-4">
//           {/* Always show Register and Login if no user */}
//           {!userName && (
//             <>
//               <Link to="/register" className={navItemClass('/register')}>
//                 Register
//               </Link>
//               <Link to="/login" className={navItemClass('/login')}>
//                 Login
//               </Link>
//             </>
//           )}

//           {/* Always show these links */}
//           <Link to="/post-job" className={navItemClass('/post-job')}>
//             Post Job
//           </Link>
//           <Link to="/" className={navItemClass('/')}>
//             Jobs
//           </Link>

//           {/* Show user info and logout button if logged in */}
//           {userName && (
//             <div className="flex items-center space-x-2 ml-4">
//               <span className="text-gray-800 font-medium">👤 {userName}</span>
//               <button
//                 onClick={handleLogout}
//                 className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const { pathname } = useLocation();
//   const navigate = useNavigate();

//   const [userName, setUserName] = useState('');

//   useEffect(() => {
//     const storedName = localStorage.getItem('userName');
//     if (storedName) {
//       setUserName(storedName);
//     }
//   }, []);

//   const navItemClass = (path) =>
//     `text-sm px-4 py-2 rounded-md transition w-full text-left ${
//       pathname === path ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
//     }`;

//   const handleLogout = () => {
//     localStorage.removeItem('userName');
//     setUserName('');
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-white shadow-md h-screen w-60 fixed left-0 top-0 z-50 flex flex-col justify-between">
//       {/* Top Section: Logo & Links */}
//       <div className="p-4">
//         <div className="text-xl font-bold text-blue-600 mb-6">
//           <Link to="/">JobBoard</Link>
//         </div>

//         <div className="flex flex-col space-y-2">
//           {!userName && (
//             <>
//               <Link to="/register" className={navItemClass('/register')}>
//                 Register
//               </Link>
//               <Link to="/login" className={navItemClass('/login')}>
//                 Login
//               </Link>
//             </>
//           )}

//           <Link to="/post-job" className={navItemClass('/post-job')}>
//             Post Job
//           </Link>
//           <Link to="/" className={navItemClass('/')}>
//             Jobs
//           </Link>
//         </div>
//       </div>

//       {/* Bottom Section: User Info & Logout */}
//       {userName && (
//         <div className="p-4 border-t flex flex-col space-y-2">
//           <span className="text-gray-800 font-medium">👤 {userName}</span>
//           <button
//             onClick={handleLogout}
//             className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can use any icon library

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const navItemClass = (path) =>
    `text-sm px-4 py-2 rounded-md transition w-full text-left ${
      pathname === path ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
    }`;

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName('');
    navigate('/login');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleMenu} className="p-2 bg-blue-600 text-white rounded">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <nav
        className={`
          bg-white shadow-md h-screen w-60 fixed top-0 z-40 flex flex-col justify-between transition-transform
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static
        `}
      >
        {/* Top Section */}
        <div className="p-4">
          <div className="text-xl font-bold text-blue-600 mb-6">
            <Link to="/" onClick={() => setMenuOpen(false)}>JobBoard</Link>
          </div>

          <div className="flex flex-col space-y-2">
            {!userName && (
              <>
                <Link to="/register" className={navItemClass('/register')} onClick={() => setMenuOpen(false)}>
                  Register
                </Link>
                <Link to="/login" className={navItemClass('/login')} onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </>
            )}

            <Link to="/post-job" className={navItemClass('/post-job')} onClick={() => setMenuOpen(false)}>
              Post Job
            </Link>
            <Link to="/" className={navItemClass('/')} onClick={() => setMenuOpen(false)}>
              Jobs
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        {userName && (
          <div className="p-4 border-t flex flex-col space-y-2">
            <span className="text-gray-800 font-medium">👤 {userName}</span>
            <button
              onClick={handleLogout}
              className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
