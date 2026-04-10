import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
     
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      
      <div className="relative text-center">
        
        <p className="text-9xl font-black text-white tracking-tighter opacity-10 leading-none">
          404
        </p>
        
        <div className="mt-[-2rem]">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Lost in the digital void?
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-400 max-w-md mx-auto">
            Sorry, we couldn’t find the page you’re looking for. It might have been moved, 
            deleted, or perhaps it never existed in this dimension.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-slate-200 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Take me home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors"
            >
              Go back <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>

        
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs text-slate-500 uppercase tracking-widest">
            Error Code: UI-404-NOT-FOUND
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
