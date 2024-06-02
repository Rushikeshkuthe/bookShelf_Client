import React from 'react';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.jpg';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaRegNewspaper, FaFileAlt } from 'react-icons/fa';
import { FiSettings, FiStar, FiClock } from 'react-icons/fi';
import { TbMoodKid } from "react-icons/tb";
import { GiNinjaStar } from "react-icons/gi";
import { MdLogout } from "react-icons/md";

const containerClasses = "flex items-center p-2 text-zinc-300 hover:bg-zinc-700 rounded-lg";
const iconClasses = "h-5 w-5 mr-3";
const activeClasses = "bg-zinc-700";

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col w-1/5 px-3">
      <Header />
      <Nav />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex flex-col flex-grow p-4">
      <div className="flex items-center mb-5 flex-col">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <span className='text-lg font-bold'>Bookself</span>
      </div>
      <div className="flex items-center">
        <img src={avatar} alt="User Avatar" className="h-10 w-10 rounded-full mr-3" />
        <div>
          <p className="text-sm font-medium">Tom Cook</p>
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  const navItems = [
    { name: 'Home', icon: <FaHome className={iconClasses} />, path: '/dash' },
    { name: 'Books', icon: <FaBook className={iconClasses} />, path: '/books' },
    { name: 'Latest', icon: <FaRegNewspaper className={iconClasses} />, path: '/latest' },
    { name: 'Manga', icon: <GiNinjaStar className={iconClasses} />, path: '/manga' },
    { name: 'Kids', icon: <TbMoodKid className={iconClasses} />, path: '/kids' },
    { name: 'Reviews', icon: <FaFileAlt className={iconClasses} />, path: '/reviews' },
  ];

  const teams = [
    { name: 'Recent', icon: <FiClock className={iconClasses} />, path: '/recent' },
    { name: 'Favorite', icon: <FiStar className={iconClasses} />, path: '/favorite' },
    { name: 'Settings', icon: <FiSettings className={iconClasses} />, path: '/settings' },
  ];

  return (
    <nav className="flex-1 space-y-2">
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) => `${containerClasses} ${isActive ? activeClasses : ''}`}
        >
          {item.icon}
          <span className="flex-1">{item.name}</span>
        </NavLink>
      ))}
      <div className="mt-8">
        <div className="mt-8 space-y-2">
          {teams.map((team, index) => (
            <NavLink
              key={index}
              to={team.path}
              className={({ isActive }) => `${containerClasses} ${isActive ? activeClasses : ''}`}
            >
              {team.icon}
              <span className="ml-3">{team.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <div className="flex items-center p-4 mt-auto">
      <MdLogout className={iconClasses} />
      <span className='ml-2'>Logout</span>
    </div>
  );
};

export default Sidebar;
