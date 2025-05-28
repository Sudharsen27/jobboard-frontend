// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
//       <Link to="/">Jobs</Link> | <Link to="/register">Register</Link>|<Link to="/login">Login</Link> |  | <Link to="/post-job">Post Job</Link>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  const navItemClass = (path) =>
    `text-sm px-4 py-2 rounded-md transition ${
      pathname === path ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">
          <Link to="/">JobBoard</Link>
        </div>

        <div className="flex space-x-2">
          <Link to="/register" className={navItemClass('/register')}>
            Register
          </Link>
          <Link to="/login" className={navItemClass('/login')}>
            Login
          </Link>
          <Link to="/post-job" className={navItemClass('/post-job')}>
            Post Job
          </Link>
          <Link to="/" className={navItemClass('/')}>
            Jobs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
