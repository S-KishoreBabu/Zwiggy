import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-12 md:py-20 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-2">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500 text-center mb-16 animate-fade-in-up">
          About Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          
          {/* Developer Profile Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl hover:bg-white/15 transition duration-500 animate-fade-in-up flex flex-col" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 rounded-full bg-linear-to-tr from-orange-400 to-purple-500 flex items-center justify-center text-3xl font-bold shadow-lg">
                KB
              </div>
              <div>
                <h2 className="text-3xl font-bold">Kishorebabu</h2>
                <p className="text-orange-400 font-medium tracking-wide">Frontend Developer</p>
              </div>
            </div>
            
            <div className="space-y-6 text-gray-300 flex-1">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🎓</span>
                <p className="leading-relaxed">Studied at <span className="font-semibold text-white">Hindusthan College of Engineering and Technology</span>, Coimbatore</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📍</span>
                <p className="leading-relaxed">Currently residing in <span className="font-semibold text-white">Coimbatore</span></p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">💼</span>
                <p className="leading-relaxed">4 months experience as an intern at <span className="font-semibold text-white">finestcoder</span></p>
              </div>
              
              <div className="pt-6 mt-auto">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="mr-2 text-xl">⚡</span> Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'NextJS'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-xl text-sm font-semibold tracking-wide hover:bg-orange-500/20 hover:text-orange-300 hover:scale-105 transition-all duration-300 cursor-default border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About ZWIGGY Card */}
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-lg border border-orange-500/30 p-8 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-orange-500/50 transition duration-500 animate-fade-in-up flex flex-col" style={{ animationDelay: '0.4s' }}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/20 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 flex items-center">
              <span className="text-orange-500 mr-2 text-5xl">Z</span>WIGGY
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Welcome to <span className="text-orange-400 font-semibold">ZWIGGY</span>, the ultimate destination for your cravings! We are a cutting-edge food ordering application built to bring your favorite meals right to your doorstep with lightning speed.
            </p>
            
            <ul className="space-y-4 text-gray-300 mb-8 flex-1">
              <li className="flex items-center space-x-4">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                <span className="text-lg">Curated selection of top-rated restaurants</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                <span className="text-lg">Real-time order tracking & seamless updates</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                <span className="text-lg">Fast, secure, and hassle-free payments</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                <span className="text-lg">Intuitive & responsive user interface</span>
              </li>
            </ul>

            <div className="mt-auto">
              <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl font-bold text-xl shadow-lg shadow-orange-500/30 transform hover:-translate-y-1 transition duration-300">
                Explore Foods
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;