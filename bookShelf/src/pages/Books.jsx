import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import { apiGET, apiPUT } from '../utils/apiHelpers';

const Books = () => {

  const hoverUnderline = 'hover:underline';
  const textCenter = 'text-center';
  const mxAutoMb4 = 'mx-auto mb-4';
  const imgClass = 'transform transition duration-300 hover:scale-105 hover:shadow-lg';

  const HeartIcon = ({ filled }) => (
    <svg className={`w-6 h-6 ${filled ? 'text-red-500' : 'text-white'}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );

  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function getAllBooks() {
    setLoading(true);
    try {
      const response = await apiGET('v1/book/getAllBook');
      console.log(response);
      if (response.data.status === 200) {
        setBookData(response.data.data);
      } else {
        console.error('Something went wrong');
      }
    } catch (error) {
      console.error('Error While fetching API: ', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  const toggleFavorite = async (book) => {
    try {
      const updatedFavorite = book.favorite === "true" ? "false" : "true";
      const response = await apiPUT(`v1/book/updateBook/${book._id}`, {
        favorite: updatedFavorite
      });
      if (response.status === 200) {
        setBookData(prevBooks =>
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

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <header className="flex items-center mb-8">
        <div className="w-full flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white font-bold text-6xl"
          >
            Books 😎
          </motion.span>
          <div>
            <nav className="space-x-4 cursor-pointer">
              {['Journal', 'Article', 'Audio', 'Podcast', 'Magazine'].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className={hoverUnderline}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </div>
          <div className="w-1/3">
            <Input.Search
              placeholder="Search books"
              className="w-full"
              enterButton
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main>
        <h2 className="text-2xl font-semibold mb-6">Books to Read</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {bookData
            .filter((book) =>
              book.bookname &&
              book.bookname.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((book) => (
              <motion.div
                key={book._id}
                className={`${textCenter} transition duration-300 hover:text-yellow-500 cursor-pointer`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={`/singlebook/${book._id}`} className="block">
                  <motion.img
                    src={`http://localhost:5001/${book.imagePath}`}
                    alt={book.bookname}
                    className={`${mxAutoMb4} ${imgClass}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <h3 className="font-bold">{book.bookname}</h3>
                  <p>{book.author}</p>
                  <span className="text-yellow-500">{book.rating}</span>
                  <a
                    href={`http://localhost:5001/${book.pdfPath}`}
                    download={`${book.bookname}.pdf`}
                    className="block mt-4 text-blue-500"
                  >
                    Download PDF
                  </a>
                </Link>
                <div>
                  <button
                    className='bg-none'
                    onClick={() => toggleFavorite(book)}
                  >
                    <HeartIcon filled={book.favorite === "true"} />
                  </button>
                </div>
              </motion.div>
            ))}
          <div></div>
        </div>
      </main>
    </div>
  );
};

export default Books;
