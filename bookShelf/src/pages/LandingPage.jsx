
import React from 'react';
import logo from '../assets/logo.png';
import landingImg from '../assets/land-img.jpg';
import { useNavigate } from 'react-router-dom';

const containerClasses = 'flex flex-col items-center justify-center';
const fullWidthContainerClasses = 'w-full max-w-6xl p-6';
const halfWidthClasses = 'md:w-1/2';
const imageContainerClasses = 'relative';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center'>
      <div className={`${containerClasses} ${fullWidthContainerClasses} md:flex-row justify-between`}>
        <div className=''></div>
        <div className={halfWidthClasses}>
          <div className='flex flex-row items-center content-center '>
            <img src={logo} alt='unbounce logo' className='mb-4' />
            <span className='text-3xl font-bold  relative z-20 drop-shadow-2xl'>Bookshelf</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-red-500'>Shelf the Best Reads</h1>
          <button
            className='bg-white text-black py-2 px-4 rounded mt-4 font-bold hover:ml-4 transition-all duration-300'
            onClick={() => {
              navigate('/login');
            }}
          >
            Let's Read
          </button>
        </div>
        <div className={`${halfWidthClasses} mt-6 md:mt-0 ${imageContainerClasses}`}>
          <div className='absolute top-0 left-0 w-10 h-24 bg-yellow-500'></div>
          <img src={landingImg} alt='Person walking through door' className='w-full h-full' />
          <div className='absolute bottom-0 right-0 w-10 h-24 bg-yellow-500'></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

