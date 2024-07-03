
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiLogout } from "react-icons/hi";
import './Logout.css'; // Import your CSS file
import { useAuthContext } from '../hooks/useAuthContext';




const Logout = () => {
    const { user, dispatch } = useAuthContext();
    const navigate = useNavigate();
    const handleLogout = (e) => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
    message.info("Logout Successfully");
        

    };

    return (
        <div className=' bg-slate-700 w-full flex flex-row items-center justify-center p-4 rounded-full '>
            <button
                // onClick={handleLogout}
                onClick={()=>handleLogout()}
                className="logout-button"
            >
                Logout  
            </button>
            <HiLogout />
        </div>
    );
};

export default Logout;
