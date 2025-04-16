import React from "react";
import logoImg from "../assets/logo.png";

function Header({ logo = logoImg, links }) {
  return (
    <header className='flex justify-between  px-6 py-4 bg-gradient-to-t from-gray-700 to-green-200  shadow-md'>
      <h1>
        <img src={logo} alt='logo' className='h-15 w-15 rounded-4xl' />
      </h1>
      <nav className='text-xl font-stretch-50%'>
        <ul className='flex space-x-8'>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className='text-indigo-950 hover:text-white transition-colors duration-200'>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
