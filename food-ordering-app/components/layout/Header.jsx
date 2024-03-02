import React, {useEffect, useState} from 'react'
import Logo from '../ui/Logo';
import {FaUserAlt, FaShoppingCart, FaSearch, FaRegWindowClose} from "react-icons/fa";
import OutsideClickHandler from 'react-outside-click-handler';
import Title from '../ui/Title';
import Search from '../ui/Search';
import {IoIosMenu} from "react-icons/io";
import {AiOutlineCloseCircle} from 'react-icons/ai';

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  const OutSideClick = () => setIsSearchModal(false)

  return (
    <div className='h-[8rem] bg-secondary'>
      <div className='md:container p-2 mx-auto text-white flex justify-between items-center h-full '>
        <div>
          <Logo />
        </div>
        <nav className={`md:static absolute top-0 left-0 text-black h-full md:w-auto w-full md:text-white flex justify-center items-center text-center ${isMenuModal !== true && "hidden"} bg-white md:bg-transparent `}>
        <AiOutlineCloseCircle className='text-black font-bold ml-auto mr-2 mt-2 hover:text-primary absolute right-4 top-4 z-50 transition-all' size={25} onClick={() => setIsMenuModal(false)} />
          <ul className='flex flex-col md:flex-row gap-x-2 uppercase'>
            <li className='hover:text-primary cursor-pointer px-[5px] py-[10px]'><a href="#">Home</a></li>
            <li className='hover:text-primary cursor-pointer px-[5px] py-[10px]'><a href="#">Menu</a></li>
            <li className='hover:text-primary cursor-pointer px-[5px] py-[10px]'><a href="#">About</a></li>
            <li className='hover:text-primary cursor-pointer px-[5px] py-[10px]'><a href="#">Book Table</a></li>
          </ul>
        </nav>
        <div className='flex items-center gap-x-4'>
          <a href="#"><FaUserAlt className='hover:text-primary transition-all' /></a>
          <a href="#"><FaShoppingCart className='hover:text-primary transition-all' /></a>
          <buttton onClick={() => setIsSearchModal(true)} ><FaSearch className='hover:text-primary transition-all' /></buttton>
          <button>
            <IoIosMenu className='md:hidden hover:text-primary transition-all text-xl' onClick={() => setIsMenuModal(true)} />
          </button>
          <a href="#"><button className='btn-primary md:block md:w-100 hidden'>Order Online</button></a>

        </div>
      </div>
      {isSearchModal && (
        <Search OutSideClick={OutSideClick} />
      )}

    </div>
  )
}

export default Header