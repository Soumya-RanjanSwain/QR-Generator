import { useState } from 'react';
import image from '../assets/logo.png';
import avatar from '../assets/dragon.jpg';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className=' h-[70px] fixed z-50 w-full  bg-[#04162f] shadow-md  justify-between px-8 mb-5 flex'>
      <div className=' h-full flex items-center py-4 '>
          <img src={image} className='w-[200px]' alt='' />
      </div>
      <div className='relative h-full flex items-center gap-2'>
        <span className='text-gray-300 hidden md:block'>Soumya Ranjan Swain</span>
        <img
          src={avatar}
          onClick={handleDropdownToggle}
          className='w-10 h-10 rounded-full cursor-pointer hover:rotate-45 transition-all hover:shadow-2xl shadow-white duration-[1s]'
          alt=''
        />
        {isDropdownOpen && (
          <div className='absolute top-full px-4  right-0 mt-2 py-2 w-[15rem] bg-white rounded shadow-xl'>
            <div className='py-3'>
              <span className=' text-lg'>Hi, Soumya Ranjan</span>
            </div>
            <hr className=''></hr>
            <button className='w-full text-left  py-2 hover:bg-gray-200'>
              Edit Profile
            </button>
            <button className='w-full text-left  py-2 hover:bg-gray-200'>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
