import React from 'react';

const NavLink = ({ name, isActive }) => {
  return (
    <a
      href={`${name.toLowerCase()}`}
      className={`${isActive ? 'font-bold text-white' : ''}`}>
      {name}
    </a>
  );
};

export default NavLink;