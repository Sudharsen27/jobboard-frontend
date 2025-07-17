import React, { useEffect, useState } from 'react';
import { Briefcase, MapPin, Building, Clock, Search, Filter, Star, Heart, CheckCircle } from 'lucide-react';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [appliedJobs, setAppliedJobs] = useState(new Set());
  const [favoriteJobs, setFavoriteJobs] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for dynamic background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Simulate API call with fetch
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/jobs');
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        console.error(err);
        // Fallback demo data for preview
        setJobs([
          {
            _id: '1',
            title: 'Senior Software Engineer',
            company: 'Tech Innovations Inc.',
            location: 'San Francisco, CA',
            description: 'Join our dynamic team to build cutting-edge applications using React, Node.js, and cloud technologies. We offer competitive salary, great benefits, and a collaborative work environment.',
            postedAt: new Date().toISOString()
          },
          {
            _id: '2',
            title: 'Product Designer',
            company: 'Creative Solutions',
            location: 'Remote',
            description: 'Design beautiful and intuitive user experiences for our next-generation products. Experience with Figma, user research, and design systems required.',
            postedAt: new Date().toISOString()
          },
          {
            _id: '3',
            title: 'Data Scientist',
            company: 'Analytics Pro',
            location: 'New York, NY',
            description: 'Analyze complex datasets to drive business insights. Strong background in Python, machine learning, and statistical analysis required.',
            postedAt: new Date().toISOString()
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // const handleApply = async (id) => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     alert('Please login first');
  //     return;
  //   }
    
  //   try {
  //     const response = await fetch(`http://localhost:5000/api/jobs/${id}/apply`, {
  //       method: 'POST',
  //       headers: { 
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}` 
  //       },
  //       body: JSON.stringify({})
  //     });
      
  //     if (!response.ok) {
  //       throw new Error('Application failed');
  //     }
      
  //     setAppliedJobs(prev => new Set([...prev, id]));
  //     alert('Applied successfully!');
  //   } catch (err) {
  //     alert('Application failed');
  //   }
  // };
const handleApply = async (id) => {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Please login first');
    return;
  }
  
  try {
    const response = await fetch(`http://localhost:5000/api/jobs/${id}/apply`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify({})
    });
    
    if (!response.ok) {
      throw new Error('Application failed');
    }
    
    setAppliedJobs(prev => new Set([...prev, id]));
    alert('✅ Successfully applied!');
  } catch (err) {
    alert('❌ Application failed');
  }
};


  const toggleFavorite = (id) => {
    setFavoriteJobs(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  const backgroundStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0.2) 25%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)`,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading amazing opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Dynamic background */}
      <div 
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={backgroundStyle}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-2xl backdrop-blur-sm">
              <Briefcase className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Job Listings
            </h2>
            <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-gray-300/80 text-lg">Discover your next career opportunity</p>
        </div>

        {/* Search and Filters */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 mb-8 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-400 focus:shadow-lg focus:shadow-blue-500/25"
              />
            </div>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location..."
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full md:w-64 pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-emerald-400 focus:shadow-lg focus:shadow-emerald-500/25"
              />
            </div>

            {/* Filter Button */}
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center gap-2 hover:scale-105">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Results count */}
          <div className="mt-4 text-gray-400 text-sm">
            Found {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <div 
              key={job._id} 
              className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-[1.02] hover:bg-white/15"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
              {/* Job Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-xl">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {job.title}
                    </h3>
                  </div>
                </div>
                
                {/* Favorite button */}
                <button 
                  onClick={() => toggleFavorite(job._id)}
                  className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <Heart 
                    className={`w-5 h-5 transition-all duration-300 ${
                      favoriteJobs.has(job._id) 
                        ? 'text-red-500 fill-red-500' 
                        : 'text-gray-400 hover:text-red-400'
                    }`} 
                  />
                </button>
              </div>

              {/* Company and Location */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Building className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium">{job.company}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Posted recently</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed">
                {job.description}
              </p>

              {/* Action Buttons */}
              {/* <div className="flex gap-3">
                <button
                  onClick={() => handleApply(job._id)}
                  disabled={appliedJobs.has(job._id)}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    appliedJobs.has(job._id)
                      ? 'bg-emerald-600 text-white cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 hover:scale-105 active:scale-95'
                  }`}
                >
                  {appliedJobs.has(job._id) ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Applied
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Apply Now
                    </>
                  )}
                </button>
                
                <button className="px-4 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  View
                </button>
              </div> */}
              {/* Action Buttons */}
<div className="flex gap-3">
  <button
    onClick={() => handleApply(job._id)}
    disabled={appliedJobs.has(job._id)}
    className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
      appliedJobs.has(job._id)
        ? 'bg-emerald-600 text-white cursor-not-allowed'
        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 hover:scale-105 active:scale-95'
    }`}
  >
    {appliedJobs.has(job._id) ? (
      <>
        <CheckCircle className="w-4 h-4" />
        Applied
      </>
    ) : (
      <>
        📤 One-Click Apply
      </>
    )}
  </button>

  <button className="px-4 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
    View
  </button>
</div>


              {/* Skill tags (if available) */}
              <div className="mt-4 flex flex-wrap gap-2">
                {['React', 'Node.js', 'TypeScript'].map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No jobs found</h3>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;