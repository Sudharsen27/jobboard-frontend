import React, { useState, useEffect } from 'react';
import { Briefcase, Building, MapPin, FileText, Send, Sparkles, Plus, CheckCircle } from 'lucide-react';

const PostJob = () => {
  const [job, setJob] = useState({ title: '', company: '', location: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSuccess, setShowSuccess] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);


  // Mouse tracking for dynamic background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

//  const handlePost = async () => {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     alert('Please login as employer first');
//     return;
//   }

//   if (!job.title || !job.company || !job.location || !job.description) {
//     alert('Please fill in all fields');
//     return;
//   }

//   const formData = new FormData();
//   formData.append('title', job.title);
//   formData.append('company', job.company);
//   formData.append('location', job.location);
//   formData.append('description', job.description);
//   if (pdfFile) {
//     formData.append('pdf', pdfFile);
//   }

//   setLoading(true);
//   try {
//     const response = await fetch('http://localhost:5000/api/jobs', {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${token}`
//       },
//       body: formData
//     });

//     if (!response.ok) {
//       throw new Error('Failed to post job');
//     }

//     setShowSuccess(true);
//     setTimeout(() => setShowSuccess(false), 3000);
//     setJob({ title: '', company: '', location: '', description: '' });
//     setPdfFile(null);
//   } catch (err) {
//     alert('Failed to post job');
//   } finally {
//     setLoading(false);
//   }
// };
const handlePost = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Please login as employer first');
    return;
  }

  if (!job.title || !job.company || !job.location || !job.description) {
    alert('Please fill in all fields');
    return;
  }

  const formData = new FormData();
  formData.append('title', job.title);
  formData.append('company', job.company);
  formData.append('location', job.location);
  formData.append('description', job.description);
  if (pdfFile) {
    formData.append('pdf', pdfFile);
  }

  setLoading(true);

  try {
    const response = await fetch('http://localhost:5000/api/jobs', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const contentType = response.headers.get('content-type');

    if (response.status === 403) {
      const errorText = contentType?.includes('application/json')
        ? (await response.json()).message
        : await response.text();
      alert(`Access Denied: ${errorText}`);
      return;
    }

    if (!response.ok) {
      const errorText = contentType?.includes('application/json')
        ? (await response.json()).message
        : await response.text();
      throw new Error(errorText || 'Failed to post job');
    }

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setJob({ title: '', company: '', location: '', description: '' });
    setPdfFile(null);
  } catch (err) {
    alert(`Error: ${err.message}`);
  } finally {
    setLoading(false);
  }
};



  const backgroundStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.3) 0%, rgba(59, 130, 246, 0.2) 25%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)`,
  };

  const isFormValid = job.title && job.company && job.location && job.description;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 p-4 relative overflow-hidden">
      {/* Dynamic background */}
      <div 
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={backgroundStyle}
      />

      {/* Floating elements */}
      <div className="absolute top-16 left-16 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      {/* Success notification */}
      {showSuccess && (
        <div className="fixed top-8 right-8 z-50 bg-emerald-500/90 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-2xl animate-bounce">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold">Job Posted Successfully! 🎉</span>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-emerald-500/20 rounded-2xl backdrop-blur-sm">
              <Plus className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Post a Job
            </h2>
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-gray-300/80 text-lg">Share your opportunity with talented professionals</p>
        </div>

        {/* Main form container */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column */}
            <div className="space-y-6">
              
              {/* Job Title */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-200 mb-3 transition-colors group-focus-within:text-emerald-400">
                  Job Title
                </label>
                <div className="relative">
                  <Briefcase className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                    focusedField === 'title' ? 'text-emerald-400' : 'text-gray-400'
                  }`} />
                  <input
                    placeholder="e.g. Senior Software Engineer"
                    value={job.title}
                    onChange={(e) => setJob({ ...job, title: e.target.value })}
                    onFocus={() => setFocusedField('title')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:scale-[1.02] ${
                      focusedField === 'title' 
                        ? 'border-emerald-400 shadow-lg shadow-emerald-500/25 bg-white/10' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                  />
                </div>
              </div>

              {/* Company */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-200 mb-3 transition-colors group-focus-within:text-emerald-400">
                  Company Name
                </label>
                <div className="relative">
                  <Building className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                    focusedField === 'company' ? 'text-emerald-400' : 'text-gray-400'
                  }`} />
                  <input
                    placeholder="e.g. Tech Innovations Inc."
                    value={job.company}
                    onChange={(e) => setJob({ ...job, company: e.target.value })}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:scale-[1.02] ${
                      focusedField === 'company' 
                        ? 'border-emerald-400 shadow-lg shadow-emerald-500/25 bg-white/10' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                  />
                </div>
              </div>

              {/* Location */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-200 mb-3 transition-colors group-focus-within:text-emerald-400">
                  Location
                </label>
                <div className="relative">
                  <MapPin className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                    focusedField === 'location' ? 'text-emerald-400' : 'text-gray-400'
                  }`} />
                  <input
                    placeholder="e.g. San Francisco, CA or Remote"
                    value={job.location}
                    onChange={(e) => setJob({ ...job, location: e.target.value })}
                    onFocus={() => setFocusedField('location')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:scale-[1.02] ${
                      focusedField === 'location' 
                        ? 'border-emerald-400 shadow-lg shadow-emerald-500/25 bg-white/10' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              
              {/* Job Description */}
              <div className="group h-full">
                <label className="block text-sm font-medium text-gray-200 mb-3 transition-colors group-focus-within:text-emerald-400">
                  Job Description
                </label>
                <div className="relative h-full">
                  <FileText className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                    focusedField === 'description' ? 'text-emerald-400' : 'text-gray-400'
                  }`} />
                  <textarea
                    placeholder="Describe the role, responsibilities, requirements, and what makes this opportunity special..."
                    value={job.description}
                    onChange={(e) => setJob({ ...job, description: e.target.value })}
                    onFocus={() => setFocusedField('description')}
                    onBlur={() => setFocusedField('')}
                    rows={8}
                    className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:scale-[1.02] resize-none ${
                      focusedField === 'description' 
                        ? 'border-emerald-400 shadow-lg shadow-emerald-500/25 bg-white/10' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                  />
                </div>
                
              </div>
              
            </div>
          </div>
          <br></br>
          <div className="group">
  <label className="block text-sm font-medium text-gray-200 mb-3">
    Upload PDF (Optional)
  </label>
  <input
    type="file"
    accept="application/pdf"
    onChange={(e) => setPdfFile(e.target.files[0])}
    className="block w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-emerald-500 file:text-white hover:file:bg-emerald-600"
  />
</div>


          {/* Form Progress Indicator */}
          <div className="mt-8 mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Form Completion</span>
              <span>{Math.round((Object.values(job).filter(v => v.trim()).length / 4) * 100)}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(Object.values(job).filter(v => v.trim()).length / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Submit Button */}
                    {/* Submit Button */}
          <div className="mt-10 text-center">
            <button
              onClick={handlePost}
              disabled={!isFormValid || loading}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 ${
                !isFormValid || loading
                  ? 'bg-emerald-700/50 cursor-not-allowed'
                  : 'bg-emerald-500 hover:bg-emerald-600'
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Posting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Post Job
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostJob;