import React from 'react';

//internal components
import Dashboard from './Dashboard';
import Home from './Home';
import Learn from './Learn';

const Nav = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">LearnLink</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300"><Home /></a>
          </li>
          <li>
            <a href="/dashboard" className="text-white hover:text-gray-300"><Dashboard /></a>
          </li>
          <li>
            <a href="/learn" className="text-white hover:text-gray-300"><Learn /></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
