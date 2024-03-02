import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Title from './Title'
import Image from 'next/image'
import Food1 from '../../images/f1.png';
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Search = ({OutSideClick}) => {
  return (
    <div className='absolute flex justify-center items-center w-screen h-screen z-10 centered after:content-[""] after:absolute after:centered after:w-screen after:h-screen after:bg-white after:opacity-50 [&>*:first-child]:z-50'>
      <OutsideClickHandler onOutsideClick={OutSideClick}>
        <div className='md:w-[500px] h-[500px] w-[370px] border-2 z-50 bg-white rounded-3xl'>
          <AiOutlineCloseCircle className='text-black font-bold ml-auto mr-2 mt-2 hover:text-primary' size={25} onClick={OutSideClick} />
          <div className='p-[2rem] pt-[1rem]'>
            <Title className="text-4xl my-2 text-black font-bold text-center">Search</Title>
            <input type="text" placeholder='Search...' className='border w-full text-red border-red active:border-red my-2 p-3 ' />
            <ul>
              <li className='py-2 px-2 flex items-center justify-between hover:bg-primary transition-all'>
                <div className='relative'>
                  <Image width={48} height={48} src={Food1} alt="" />
                </div>
                <span className='text-red font-bold'>Good Pizza</span>
                <span className='font-bold'>$10</span>
              </li>
              <li className='py-2 px-2 flex items-center justify-between hover:bg-primary transition-all'>
                <div className='relative'>
                  <Image width={48} height={48} src={Food1} alt="" />
                </div>
                <span className='text-red font-bold'>Good Pizza</span>
                <span className='font-bold'>$10</span>
              </li><li className='py-2 px-2 flex items-center justify-between hover:bg-primary transition-all'>
                <div className='relative'>
                  <Image width={48} height={48} src={Food1} alt="" />
                </div>
                <span className='text-red font-bold'>Good Pizza</span>
                <span className='font-bold'>$10</span>
              </li>
            </ul>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default Search