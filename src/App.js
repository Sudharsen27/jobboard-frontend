// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import JobList from './pages/JobList';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import PostJob from './pages/PostJob';
// import EmployerApplications from './pages/EmployerApplications';
// import EmployerOnlyPage from './pages/EmployerOnlyPage';
// import CandidateDashboard from './pages/CandidateDashboard';
// import EmployerDashboard from './pages/EmployerDashboard';
// import ChatRoom from './components/ChatRoom';

// // 🌐 General Pages
// import About from './pages/About';
// import Contact from './pages/Contact';
// import FAQ from './pages/FAQ';
// import Terms from './pages/Terms';
// import Privacy from './pages/Privacy';
// // import Blog from './pages/Blog';

// function App() {
//   const userRole = localStorage.getItem('userRole');

//   // Sample static values (can be dynamic later)
//   const jobId = '64fab12345cdef1234567890';
//   const currentUserId = '64fabc00001abc0000000001';
//   const targetUserId = '64fabc00001abc0000000002';

//   return (
//     <Router>
//       <div className="flex">
//         {/* Sidebar Navigation */}
//         <Navbar />

//         {/* Main Content */}
//         <main className="ml-0 md:ml-60 w-full p-6">
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<JobList />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/post-job" element={<PostJob />} />

//             {/* General Info Pages */}
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/faq" element={<FAQ />} />
//             <Route path="/terms" element={<Terms />} />
//             <Route path="/privacy" element={<Privacy />} />
//             {/* <Route path="/blog" element={<Blog />} /> */}

//             {/* Employer-Only Pages */}
//             <Route
//               path="/employer/applications"
//               element={
//                 userRole === 'employer' ? <EmployerApplications /> : <EmployerOnlyPage />
//               }
//             />
//             <Route
//               path="/EmployerApplications"
//               element={<Navigate to="/employer/applications" replace />}
//             />

//             {/* Dashboard Route (Role Based) */}
//             <Route
//               path="/dashboard"
//               element={
//                 userRole === 'employer' ? <EmployerDashboard /> : <CandidateDashboard />
//               }
//             />

//             {/* Chat Room */}
//             <Route
//               path="/chat"
//               element={
//                 <ChatRoom
//                   jobId={jobId}
//                   currentUserId={currentUserId}
//                   targetUserId={targetUserId}
//                 />
//               }
//             />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ Add this
import JobList from './pages/JobList';
import Register from './pages/Register';
import Login from './pages/Login';
import PostJob from './pages/PostJob';
import EmployerApplications from './pages/EmployerApplications';
import EmployerOnlyPage from './pages/EmployerOnlyPage';
import CandidateDashboard from './pages/CandidateDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import ChatRoom from './components/ChatRoom';

// 🌐 General Pages
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  const userRole = localStorage.getItem('userRole');

  // Sample static values (can be dynamic later)
  const jobId = '64fab12345cdef1234567890';
  const currentUserId = '64fabc00001abc0000000001';
  const targetUserId = '64fabc00001abc0000000002';

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow ml-0 md:ml-60 p-6">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<JobList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post-job" element={<PostJob />} />

            {/* General Info Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />

            {/* Employer-Only Pages */}
            <Route
              path="/employer/applications"
              element={
                userRole === 'employer' ? <EmployerApplications /> : <EmployerOnlyPage />
              }
            />
            <Route
              path="/EmployerApplications"
              element={<Navigate to="/employer/applications" replace />}
            />

            {/* Dashboard Route */}
            <Route
              path="/dashboard"
              element={
                userRole === 'employer' ? <EmployerDashboard /> : <CandidateDashboard />
              }
            />

            {/* Chat Room */}
            <Route
              path="/chat"
              element={
                <ChatRoom
                  jobId={jobId}
                  currentUserId={currentUserId}
                  targetUserId={targetUserId}
                />
              }
            />
          </Routes>
        </main>
        <Footer /> {/* ✅ Add Footer below the Routes */}
      </div>
    </Router>
  );
}

export default App;
