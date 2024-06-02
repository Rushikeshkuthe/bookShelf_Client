// // Logout.js

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { HiLogout } from "react-icons/hi";

// const Logout = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         // Clear local storage
//         localStorage.removeItem('token');
//         // Redirect to login page
//         navigate('/login');
//     };

//     return (
//         <div className=' bg-slate-700 w-full flex flex-row items-center justify-center p-2 rounded-full px-1'>
//                 <button
//                     onClick={handleLogout}
//                     className="w-full p-3 rounded-lg  text-white font-semibold"
//                 >
//                     Logout
//                 </button>
//                 <HiLogout />
            
//         </div>
//     );
// };

// export default Logout;

// Logout.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiLogout } from "react-icons/hi";
import './Logout.css'; // Import your CSS file

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear local storage
        localStorage.removeItem('token');
        // Redirect to login page
        navigate('/login');
    };

    return (
        <div className=' bg-slate-700 w-full flex flex-row items-center justify-center p-4 rounded-full '>
            <button
                onClick={handleLogout}
                className="logout-button"
            >
                Logout  
            </button>
            <HiLogout />
        </div>
    );
};

export default Logout;
