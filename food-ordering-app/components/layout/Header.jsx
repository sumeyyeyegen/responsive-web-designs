import React from 'react'
import Logo from '../ui/Logo';
import { FaUserAlt, FaShoppingCart,FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className='h-[8rem] bg-secondary'>
      <div className='container  mx-auto flex justify-between h-full items-center'>
        <div>
          <Logo />
        </div>
        <nav className=''>
          <ul className='flex gap-x-2 uppercase'>
            <li className='hover:text-primary cursor-pointer'><a href="#">Home</a></li>
            <li className='hover:text-primary cursor-pointer'><a href="#">Menu</a></li>
            <li className='hover:text-primary cursor-pointer'><a href="#">About</a></li>
            <li className='hover:text-primary cursor-pointer'><a href="#">Book Table</a></li>
          </ul>
        </nav>
        <div className='flex items-center gap-x-4'>
          <a href="#"><FaUserAlt/></a>
          <a href="#"><FaShoppingCart/></a>
          <a href="#"><FaSearch/></a>
          <a href="#"><button className='btn-primary'>Order Online</button></a>
        </div>
      </div>
    </div>
  )
}

export default Header