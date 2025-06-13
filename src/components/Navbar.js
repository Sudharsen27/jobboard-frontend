

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
import { Menu, X, Briefcase } from 'lucide-react';
// You can use any icon library

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
const [userRole, setUserRole] = useState('');

  const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  const storedName = localStorage.getItem('userName');
  const storedRole = localStorage.getItem('userRole');
  if (storedName) setUserName(storedName);
  if (storedRole) setUserRole(storedRole);
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
            <Link to="/employer/applications" className={navItemClass('/employer/applications')}>View Applications</Link>
            {userRole === 'employer' && (
  <Link
    to="/employer/applications"
    className={navItemClass('/employer/applications')}
    onClick={() => setMenuOpen(false)}
  >
    <div className="flex items-center gap-2">
      <Briefcase size={16} />
      Applications
    </div>
  </Link>
)}
            
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
