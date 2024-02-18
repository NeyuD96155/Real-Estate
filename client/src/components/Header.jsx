import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Corrected the import statement

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchTerm}`);
    // Add search functionality or redirection here
  };

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Sahand</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        <form onSubmit={handleSubmit} className="bg-slate-100 p-3 rounded-lg flex items-center" role="search">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="text-slate-600" aria-label="Submit search">
            <FaSearch />
          </button>
        </form>
        
        <ul className='flex gap-4'>
            <li>
                <Link to="/" className='hidden sm:inline text-slate-700 hover:underline'>Home</Link>
            </li>
            <li>
                <Link to="/about" className='hidden sm:inline text-slate-700 hover:underline'>About</Link>
            </li>
            <li>
                <Link to="/sign-in" className='text-slate-700 hover:underline'>Sign In</Link>
            </li>
        </ul>
      </div>
    </header>
  );
}
