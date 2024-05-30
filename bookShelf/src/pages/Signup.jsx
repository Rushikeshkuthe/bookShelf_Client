import React from 'react';
import bg from '../assets/bg.jpg'
import { useNavigate } from 'react-router-dom';

const fullCentered = "flex items-center justify-center min-h-screen";
const inputClasses = "w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className={`relative z-10 ${fullCentered}`}>
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold text-white text-center mb-6">SIGNUP</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" className={inputClasses} />
            <input type="email" placeholder="Email" className={inputClasses} />
            <input type="password" placeholder="Password" className={inputClasses} />
            <input type="password" placeholder="Retype Password" className={inputClasses} />
            <button type="submit" className="w-full p-3 rounded-lg bg-orange-500 text-white font-semibold">SIGNUP</button>
          </form>
          <div className='flex flex-col items-center' onClick={() => {navigate("/login")}}>
                        <p className="text-center text-white mt-4">
                            Not a member of Bookshelf 
                        </p>
                        <a className='cursor-pointer font-bold decoration-stone-50'>LOGIN</a>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

