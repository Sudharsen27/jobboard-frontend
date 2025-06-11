// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import JobList from './pages/JobList';
// import Register from './pages/Register';
// import Login from './pages/Login'; 
// import PostJob from './pages/PostJob';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<JobList />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/post-job" element={<PostJob />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import JobList from './pages/JobList';
import Register from './pages/Register';
import Login from './pages/Login'; 
import PostJob from './pages/PostJob';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Left Sidebar */}
        <Navbar />

        {/* Main Content */}
        <main className="ml-0 md:ml-60 w-full p-6">
          <Routes>
            <Route path="/" element={<JobList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post-job" element={<PostJob />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
