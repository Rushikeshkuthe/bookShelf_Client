// import React from 'react';

// // Constants for repeated class strings
// const buttonBaseClasses = 'px-4 py-2 rounded text-white';
// const sectionBaseClasses = 'bg-zinc-800 p-6 rounded-lg';
// const labelBaseClasses = 'block text-zinc-400 mb-2';
// const inputBaseClasses = 'w-full p-2 rounded bg-zinc-700 text-white';

// // Main component
// function Settings() {
//   return (
//     <div className="bg-black text-white min-h-screen p-6">
//       <span className='text-white font-bold text-7xl '>
//             Settings 😒🤦‍♀️
//           </span>
//           <p className="text-zinc-400 mt-4">Too Much chik chik repair it HEAR</p>
//       <div className="flex space-x-4 mb-6">
//         <button className="text-purple-500 border-b-2 b order-purple-500 pb-2">General settings</button>
//         <button className="text-zinc-500 pb-2">Subscription</button>
//       </div>
//       <div className="space-y-6">
//         <div className={sectionBaseClasses}>
//           <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
//           <div className="flex items-center space-x-4 mb-4">
//             <img src="https://placehold.co/100x100" alt="Profile Photo" className="w-24 h-24 rounded-full" />
//             <div className="space-x-2">
//               <button className={`${buttonBaseClasses} bg-purple-500`}>Upload Profile Photo</button>
//               <button className={`${buttonBaseClasses} bg-zinc-700`}>Remove</button>
//             </div>
//           </div>
//           <p className="text-zinc-400 mb-4">Image size should be at least 300x300px, and less than 500kb, allowed files: png and jpg</p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className={labelBaseClasses}>Username</label>
//               <input type="text" value="Elizabeth Pimly" className={inputBaseClasses} />
//             </div>
//             <div>
//               <label className={labelBaseClasses}>Email</label>
//               <input type="email" value="elizabeth.p@gmail.com" className={inputBaseClasses} />
//             </div>
//           </div>
//         </div>

//         <div className={sectionBaseClasses}>
//           <h2 className="text-xl font-semibold mb-4">Affiliate ID</h2>
//           <p className="text-zinc-400 mb-4">You can permanently delete or temporarily freeze your account.</p>
//           <button className={`${buttonBaseClasses} bg-purple-500`}>Get Affiliate ID</button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className={sectionBaseClasses}>
//             <h2 className="text-xl font-semibold mb-4">Change Password</h2>
//             <p className="text-zinc-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             <button className={`${buttonBaseClasses} bg-purple-500`}>Change Password</button>
//           </div>

//           <div className={sectionBaseClasses}>
//             <h2 className="text-xl font-semibold mb-4">Delete Account</h2>
//             <p className="text-zinc-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             <button className={`${buttonBaseClasses} bg-red-500`}>Delete Account</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Settings;
import React, { useState } from 'react';
import SubscriptionPlan from './SubscriptionPlan'; // Adjust the path as needed

// Constants for repeated class strings
const buttonBaseClasses = 'px-4 py-2 rounded text-white';
const sectionBaseClasses = 'bg-black p-6 rounded-lg';
const labelBaseClasses = 'block text-zinc-400 mb-2';
const inputBaseClasses = 'w-full p-2 rounded bg-zinc-700 text-white';

// Main component
function Settings() {
  const [currentSection, setCurrentSection] = useState('general');

  const handleSubscriptionClick = () => {
    setCurrentSection('subscription');
  };

  const handleGeneralSettingsClick = () => {
    setCurrentSection('general');
  };

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <span className='text-white font-bold text-7xl '>
        Settings 😒🤦‍♀️
      </span>
      <p className="text-zinc-400 mt-4">Too Much chik chik repair it HEAR</p>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={handleGeneralSettingsClick}
          className={`text-purple-500 border-b-2 ${currentSection === 'general' ? 'border-purple-500' : ''} pb-2`}
        >
          General settings
        </button>
        <button
          onClick={handleSubscriptionClick}
          className={`text-purple-500 border-b-2 ${currentSection === 'subscription' ? 'border-purple-500' : ''} pb-2`}
        >
          Subscription
        </button>
      </div>
      <div className="space-y-6">
        {currentSection === 'general' && (
          <>
            <div className={sectionBaseClasses}>
              <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
              <div className="flex items-center space-x-4 mb-4">
                <img src="https://placehold.co/100x100" alt="Profile Photo" className="w-24 h-24 rounded-full" />
                <div className="space-x-2">
                  <button className={`${buttonBaseClasses} bg-purple-500`}>Upload Profile Photo</button>
                  <button className={`${buttonBaseClasses} bg-zinc-700`}>Remove</button>
                </div>
              </div>
              <p className="text-zinc-400 mb-4">Image size should be at least 300x300px, and less than 500kb, allowed files: png and jpg</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelBaseClasses}>Username</label>
                  <input type="text" value="Elizabeth Pimly" className={inputBaseClasses} />
                </div>
                <div>
                  <label className={labelBaseClasses}>Email</label>
                  <input type="email" value="elizabeth.p@gmail.com" className={inputBaseClasses} />
                </div>
              </div>
            </div>

            <div className={sectionBaseClasses}>
              <h2 className="text-xl font-semibold mb-4">Affiliate ID</h2>
              <p className="text-zinc-400 mb-4">You can permanently delete or temporarily freeze your account.</p>
              <button className={`${buttonBaseClasses} bg-purple-500`}>Get Affiliate ID</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={sectionBaseClasses}>
                <h2 className="text-xl font-semibold mb-4">Change Password</h2>
                <p className="text-zinc-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className={`${buttonBaseClasses} bg-purple-500`}>Change Password</button>
              </div>

              <div className={sectionBaseClasses}>
                <h2 className="text-xl font-semibold mb-4">Delete Account</h2>
                <p className="text-zinc-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className={`${buttonBaseClasses} bg-red-500`}>Delete Account</button>
              </div>
            </div>
          </>
        )}

        {currentSection === 'subscription' && (
          <div className={sectionBaseClasses}>
            <h2 className="text-xl font-semibold mb-4">Subscription Plans</h2>
            <SubscriptionPlan />
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;
