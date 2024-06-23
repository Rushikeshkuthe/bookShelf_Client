import React , { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Input , message } from 'antd';
import { apiGET } from '../utils/apiHelpers';

// Constants for repeated class names
const hoverUnderline = 'hover:underline';
const textCenter = 'text-center';
const mxAutoMb4 = 'mx-auto mb-4';
const imgClass = 'transform transition duration-300 hover:scale-105 hover:shadow-lg';

const Manga = () => {
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
  
  return (
    <div className="bg-black text-white min-h-screen p-4">
      <header className="flex items-center mb-8 w-full">
        <div className='w-full flex items-center justify-between'>
          <div className='w-full'>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='text-white font-bold text-6xl'
            >
              Manga 🥷
            </motion.span>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-zinc-400 mt-5"
            >
              Naya Naya Maal Hai
            </motion.p>
          </div>
        </div>
        <div className=' w-1/3'>
          <Input.Search
            placeholder="Search books"
            className="w-full"
            enterButton
            onChange={e => setSearchTerm(e.target.value)}
          />
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
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Manga;
