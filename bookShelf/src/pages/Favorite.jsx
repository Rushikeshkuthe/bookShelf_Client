// import React,{useState ,useEffect} from 'react';

// // Constants for repeated class strings
// const cardBaseStyle = "bg-gradient-to-r from-slate-700 to-slate-500 p-4 rounded-lg";
// const buttonBaseStyle = "p-2 rounded-lg";
// const heartIcon = (
//   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//   </svg>
// );

// // Data for the cards


// function Favorites() {

//   const [favorites, setFavorites] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await apiGET('v1/book/getAllBook');
//         if (response.status === 200) {
//           console.log(response.data.data);
//           const favBooks = response.data.data.filter(book => book.favorite === "true");
//           setFavorites(favBooks);
//         } else {
//           message.error('Failed to fetch books');
//         }
//       } catch (error) {
//         message.error(error.message);
//       }
//     };

//     fetchBooks();
//   }, []);


//   return (
//     <div className="bg-black text-white min-h-screen p-4">
//       <div className="flex items-center space-x-4 mb-6">
//         <div>
//           <span className='text-white font-bold text-7xl'>
//             Favorite 😍👧🏼
//           </span>
//           <p className="text-zinc-400">Choose your fav one (32 Books)</p>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {profiles.map((profile, index) => (
//           <div key={index} className={cardBaseStyle}>
//             <div className="flex items-center">
//               <img src={profile.imageUrl} alt={profile.alt} className="rounded-full mr-4" />
//               <div>
//                 <h2 className="text-xl font-bold">{profile.username}</h2>
//                 <p className="text-sm">{profile.description}</p>
//               </div>
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <button className={`${buttonBaseStyle} bg-white text-black`}>Read More</button>
//               <button className={`${buttonBaseStyle} bg-none text-black`}>{heartIcon}</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Favorites;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { apiGET,  apiPUT } from '../utils/apiHelpers';

// Constants for repeated class strings
const cardBaseStyle = "bg-gradient-to-r from-slate-700 to-slate-500 p-4 rounded-lg";
const buttonBaseStyle = "p-2 rounded-lg";

const HeartIcon = ({ filled }) => (
  <svg className={`w-6 h-6 ${filled ? 'text-red-500' : 'text-white'}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await apiGET('v1/book/getAllBook');
        if (response.status === 200) {
          const favBooks = response.data.data.filter(book => book.favorite === "true");
          setFavorites(favBooks);
        } else {
          message.error('Failed to fetch books');
        }
      } catch (error) {
        message.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const toggleFavorite = async (book) => {
    try {
      const updatedFavorite = book.favorite === "true" ? "false" : "true";
      const response = await apiPUT(`v1/book/updateBook/${book._id}`, {
        ...book,
        favorite: updatedFavorite
      });
      if (response.status === 200) {
        setFavorites(prevFavorites =>
          prevFavorites.map(b =>
            b._id === book._id ? { ...b, favorite: updatedFavorite } : b
          )
        );
      } else {
        message.error('Failed to update favorite status');
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <div className="flex items-center space-x-4 mb-6">
        <div>
          <span className="text-white font-bold text-7xl">
            Favorite 😍👧🏼
          </span>
          <p className="text-zinc-400">Choose your fav one ({favorites.length} Books)</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((book, index) => (
          <div key={index} className={cardBaseStyle}>
            <div className="flex items-center">
              <img src={book.imagePath} alt={book.bookname} className="rounded-full mr-4" />
              <div>
                <h2 className="text-xl font-bold">{book.bookname}</h2>
                <p className="text-sm">{book.bookSummary}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className={`${buttonBaseStyle} bg-white text-black`}>Read More</button>
              <button
                className={`${buttonBaseStyle} bg-none`}
                onClick={() => toggleFavorite(book)}
              >
                <HeartIcon filled={book.favorite === "true"} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
