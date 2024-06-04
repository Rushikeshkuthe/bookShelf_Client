import React from 'react';
import { motion } from 'framer-motion';
import { Input } from 'antd';

// Constants for repeated class names
const hoverUnderline = 'hover:underline';
const textCenter = 'text-center';
const mxAutoMb4 = 'mx-auto mb-4';
const imgClass = 'transform transition duration-300 hover:scale-105 hover:shadow-lg';

const Kids = () => {
  const kidsItems = [
    { title: 'Diary of a Wimpy Kid', author: 'Jeff Kinney', imgSrc: 'https://placehold.co/150x200', alt: 'Diary of a Wimpy Kid' ,rating: "★★★★☆" },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', imgSrc: 'https://placehold.co/150x200', alt: 'Harry Potter and the Sorcerer\'s Stone' ,rating: "★★★★☆" },
    { title: 'Percy Jackson & the Olympians: The Lightning Thief', author: 'Rick Riordan', imgSrc: 'https://placehold.co/150x200', alt: 'Percy Jackson & the Olympians: The Lightning Thief',rating: "★★★★☆"  },
    { title: 'The Cat in the Hat', author: 'Dr. Seuss', imgSrc: 'https://placehold.co/150x200', alt: 'The Cat in the Hat',rating: "★★★★☆"  },
    { title: 'Where the Wild Things Are', author: 'Maurice Sendak', imgSrc: 'https://placehold.co/150x200', alt: 'Where the Wild Things Are',rating: "★★★★☆"  },
    { title: 'A Series of Unfortunate Events: The Bad Beginning', author: 'Lemony Snicket', imgSrc: 'https://placehold.co/150x200', alt: 'A Series of Unfortunate Events: The Bad Beginning' ,rating: "★★★★☆" },
    { title: 'Matilda', author: 'Roald Dahl', imgSrc: 'https://placehold.co/150x200', alt: 'Matilda' ,rating: "★★★★☆" },
    { title: 'Charlie and the Chocolate Factory', author: 'Roald Dahl', imgSrc: 'https://placehold.co/150x200', alt: 'Charlie and the Chocolate Factory' ,rating: "★★★★☆" },
    { title: 'The Very Hungry Caterpillar', author: 'Eric Carle', imgSrc: 'https://placehold.co/150x200', alt: 'The Very Hungry Caterpillar' ,rating: "★★★★☆" },
    { title: 'Green Eggs and Ham', author: 'Dr. Seuss', imgSrc: 'https://placehold.co/150x200', alt: 'Green Eggs and Ham',rating: "★★★★☆"  },
    { title: 'Wonder', author: 'R.J. Palacio', imgSrc: 'https://placehold.co/150x200', alt: 'Wonder' ,rating: "★★★★☆" },
    { title: 'The Lightning Thief (Graphic Novel)', author: 'Rick Riordan', imgSrc: 'https://placehold.co/150x200', alt: 'The Lightning Thief (Graphic Novel)' ,rating: "★★★★☆" },
    { title: 'The Adventures of Captain Underpants', author: 'Dav Pilkey', imgSrc: 'https://placehold.co/150x200', alt: 'The Adventures of Captain Underpants' ,rating: "★★★★☆" },
    { title: 'Magic Tree House: Dinosaurs Before Dark', author: 'Mary Pope Osborne', imgSrc: 'https://placehold.co/150x200', alt: 'Magic Tree House: Dinosaurs Before Dark' ,rating: "★★★★☆" },
    { title: 'Dog Man: Brawl of the Wild', author: 'Dav Pilkey', imgSrc: 'https://placehold.co/150x200', alt: 'Dog Man: Brawl of the Wild' ,rating: "★★★★☆" },
    { title: 'The Secret Garden', author: 'Frances Hodgson Burnett', imgSrc: 'https://placehold.co/150x200', alt: 'The Secret Garden' ,rating: "★★★★☆"  },
  ];

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
          />
        </div>
        </div>
      </header>

      <main>
        <h2 className="text-2xl font-semibold mb-6">Books for Kids</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {kidsItems.map(item => (
            <motion.div
              key={item.title}
              className={`${textCenter} transition duration-300 hover:text-yellow-500 cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={item.imgSrc}
                alt={item.alt}
                className={`${mxAutoMb4} ${imgClass}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.author}</p>
              <span className="text-yellow-500">{item .rating}</span>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Kids;
