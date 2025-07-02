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

function App() {
  const userRole = localStorage.getItem('userRole');

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

            {/* Employer Applications (Role-Protected) */}
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

            {/* Redirect for capitalized version */}
            <Route
              path="/EmployerApplications"
              element={<Navigate to="/employer/applications" replace />}
            />

            {/* Role-based Dashboard Route */}
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
