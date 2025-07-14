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

// function App() {
//   const userRole = localStorage.getItem('userRole');

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

//             {/* Employer Applications (Role-Protected) */}
//             <Route
//               path="/employer/applications"
//               element={
//                 userRole === 'employer' ? (
//                   <EmployerApplications />
//                 ) : (
//                   <EmployerOnlyPage />
//                 )
//               }
//             />

//             {/* Redirect for capitalized version */}
//             <Route
//               path="/EmployerApplications"
//               element={<Navigate to="/employer/applications" replace />}
//             />

//             {/* Role-based Dashboard Route */}
//             <Route
//               path="/dashboard"
//               element={
//                 userRole === 'employer' ? (
//                   <EmployerDashboard />
//                 ) : (
//                   <CandidateDashboard />
//                 )
//               }
//             />
//             <Route
//   path="/chat"
//   element={
//     <ChatRoom
//   jobId="64fab12345cdef1234567890"
//   currentUserId="64fabc00001abc0000000001"
//   targetUserId="64fabc00001abc0000000002"
// />
//   }
// />
//           </Routes>
          
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import JobList from './pages/JobList';
import Register from './pages/Register';
import Login from './pages/Login';
import PostJob from './pages/PostJob';
import EmployerApplications from './pages/EmployerApplications';
import EmployerOnlyPage from './pages/EmployerOnlyPage';
import CandidateDashboard from './pages/CandidateDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import ChatRoom from './components/ChatRoom';

function App() {
  const userRole = localStorage.getItem('userRole');

  // You can later make these dynamic via route params
  const jobId = '64fab12345cdef1234567890';
  const currentUserId = '64fabc00001abc0000000001';
  const targetUserId = '64fabc00001abc0000000002';

  return (
    <Router>
      <div className="flex">
        {/* Sidebar Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="ml-0 md:ml-60 w-full p-6">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<JobList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post-job" element={<PostJob />} />

            {/* Employer Applications */}
            <Route
              path="/employer/applications"
              element={
                userRole === 'employer' ? (
                  <EmployerApplications />
                ) : (
                  <EmployerOnlyPage />
                )
              }
            />

            {/* Capitalized version redirect */}
            <Route
              path="/EmployerApplications"
              element={<Navigate to="/employer/applications" replace />}
            />

            {/* Dashboard Route */}
            <Route
              path="/dashboard"
              element={
                userRole === 'employer' ? (
                  <EmployerDashboard />
                ) : (
                  <CandidateDashboard />
                )
              }
            />

            {/* Chat Room Route - hardcoded for now */}
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
      </div>
    </Router>
  );
}

export default App;
