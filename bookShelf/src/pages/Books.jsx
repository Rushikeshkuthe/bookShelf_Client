import React from 'react';
import { motion } from 'framer-motion';
import { Input } from 'antd';

// Constants for repeated class names
const hoverUnderline = 'hover:underline';
const textCenter = 'text-center';
const mxAutoMb4 = 'mx-auto mb-4';
const imgClass = 'transform transition duration-300 hover:scale-105 hover:shadow-lg';

const Books = () => {
  const books = [
    { title: 'Farsighted', author: 'Steven Johnson', imgSrc: 'https://placehold.co/150x200', alt: 'Farsighted' ,rating: "★★★★☆"  },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', imgSrc: 'https://placehold.co/150x200', alt: 'Thinking, Fast and Slow' ,rating: "★★★★☆"  },
    { title: 'The Coddling of the American Mind', author: 'Greg Lukianoff and Jonathan Haidt', imgSrc: 'https://placehold.co/150x200', alt: 'The Coddling of the American Mind'  ,rating: "★★★★☆" },
    { title: 'The Laws of Simplicity', author: 'John Maeda', imgSrc: 'https://placehold.co/150x200', alt: 'The Laws of Simplicity'  ,rating: "★★★★☆" },
    { title: 'Farsighted', author: 'Steven Johnson', imgSrc: 'https://placehold.co/150x200', alt: 'Farsighted' ,rating: "★★★★☆"  },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', imgSrc: 'https://placehold.co/150x200', alt: 'Thinking, Fast and Slow' ,rating: "★★★★☆"  },
    { title: 'The Coddling of the American Mind', author: 'Greg Lukianoff and Jonathan Haidt', imgSrc: 'https://placehold.co/150x200', alt: 'The Coddling of the American Mind' ,rating: "★★★★☆"  },
    { title: 'The Laws of Simplicity', author: 'John Maeda', imgSrc: 'https://placehold.co/150x200', alt: 'The Laws of Simplicity'  ,rating: "★★★★☆" },
    { title: 'Farsighted', author: 'Steven Johnson', imgSrc: 'https://placehold.co/150x200', alt: 'Farsighted'  ,rating: "★★★★☆" },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', imgSrc: 'https://placehold.co/150x200', alt: 'Thinking, Fast and Slow'  ,rating: "★★★★☆" },
    { title: 'The Coddling of the American Mind', author: 'Greg Lukianoff and Jonathan Haidt', imgSrc: 'https://placehold.co/150x200', alt: 'The Coddling of the American Mind'  ,rating: "★★★★☆" },
    { title: 'The Laws of Simplicity', author: 'John Maeda', imgSrc: 'https://placehold.co/150x200', alt: 'The Laws of Simplicity'  ,rating: "★★★★☆" },
    { title: 'Farsighted', author: 'Steven Johnson', imgSrc: 'https://placehold.co/150x200', alt: 'Farsighted'  ,rating: "★★★★☆" },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', imgSrc: 'https://placehold.co/150x200', alt: 'Thinking, Fast and Slow'  ,rating: "★★★★☆" },
    { title: 'The Coddling of the American Mind', author: 'Greg Lukianoff and Jonathan Haidt', imgSrc: 'https://placehold.co/150x200', alt: 'The Coddling of the American Mind' ,rating: "★★★★☆"  },
    { title: 'The Laws of Simplicity', author: 'John Maeda', imgSrc: 'https://placehold.co/150x200', alt: 'The Laws of Simplicity' ,rating: "★★★★☆"  },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <header className="flex items-center mb-8">
        <div className='w-full flex items-center justify-between'>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='text-white font-bold text-6xl'
          >
            Books 😎
          </motion.span>
          <div>
        <nav className="space-x-4 cursor-pointer">
          {['Journal', 'Article', 'Audio', 'Podcast' ,'Magazine'].map(link => (
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
          <div className=' w-1/3'>
          <Input.Search
            placeholder="Search books"
            className="w-full"
            enterButton
          />
        </div>
        
        </div>
        
      </header>

      <main>
        <h2 className="text-2xl font-semibold mb-6">Books to Read</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {books.map(book => (
            <motion.div
              key={book.title}
              className={`${textCenter} transition duration-300 hover:text-yellow-500 cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={book.imgSrc}
                alt={book.alt}
                className={`${mxAutoMb4} ${imgClass}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="font-bold">{book.title}</h3>
              <p>{book.author}</p>
              <span className="text-yellow-500">{book.rating}</span>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Books;
