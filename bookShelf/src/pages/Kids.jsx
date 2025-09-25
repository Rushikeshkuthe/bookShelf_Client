import React , { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { apiGET,apiPUT } from '../utils/apiHelpers';
import { Input, message  } from 'antd';

// Constants for repeated class names
const hoverUnderline = 'hover:underline';
const textCenter = 'text-center';
const mxAutoMb4 = 'mx-auto mb-4';
const imgClass = 'transform transition duration-300 hover:scale-105 hover:shadow-lg';

const HeartIcon = ({ filled }) => (
  <svg className={`w-6 h-6 ${filled ? 'text-red-500' : 'text-white'}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const Kids = () => {
 const [mangaItems, setMangaItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await apiGET('v1/book/getAllBook');
        if (response.status === 200) {
          console.log(response.data.data);
          const managaBooks = response.data.data.filter(book => book.category === "Manga");
          setMangaItems(managaBooks);
        } else {
          message.error('Failed to fetch books');
        }
      } catch (error) {
        message.error(error.message);
      }
    };

    fetchBooks();
  }, []);

  const toggleFavorite = async (book) => {
    try {
      const updatedFavorite = book.favorite === "true" ? "false" : "true";
      const response = await apiPUT(`v1/book/updateBook/${book._id}`, {
        favorite: updatedFavorite
      });
      if (response.status === 200) {
        setMangaItems(prevBooks =>
          prevBooks.map(b =>
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

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <header className="flex items-center mb-8">
        <div className='w-full flex items-center justify-between'>
          <div className='w-full'>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='text-white font-bold text-6xl'
          >
            Kids 👶🏼
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-zinc-400 mt-5"
          >
            Where Stories Sparkle and Imaginations Soar!
          </motion.p>
          </div>
          <div className=' w-1/3'>
          <Input.Search
            placeholder="Search books"
            className="w-full"
            enterButton
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        </div>
      </header>

      <main>
        <h2 className="text-2xl font-semibold mb-6">Latest Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mangaItems.filter(item => 
            item.bookname && item.bookname.toLowerCase().includes(searchTerm.toLowerCase())
          ).map(item => (
            <motion.div
              key={item._id}
              className={`${textCenter} transition duration-300 hover:text-yellow-500 cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={`http://localhost:5001/${item.imagePath}`}
                alt={item.bookname}
                className={`${mxAutoMb4} ${imgClass}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="font-bold">{item.bookname}</h3>
              <p>{item.author}</p>
              <span className="text-yellow-500">{item.rating}</span>
              <div>
              <button
                    className='bg-none'
                    onClick={() => toggleFavorite(item)}
                  >
                    <HeartIcon filled={item.favorite === "true"} />
                  </button>
                  </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Kids;
