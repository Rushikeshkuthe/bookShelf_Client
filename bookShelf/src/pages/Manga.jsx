import React from 'react';
import { motion } from 'framer-motion';
import { Input } from 'antd';

// Constants for repeated class names
const hoverUnderline = 'hover:underline';
const textCenter = 'text-center';
const mxAutoMb4 = 'mx-auto mb-4';
const imgClass = 'transform transition duration-300 hover:scale-105 hover:shadow-lg';

const Manga = () => {
  const manga = [
    { title: 'One Piece', author: 'Eiichiro Oda', imgSrc: 'https://placehold.co/150x200', alt: 'One Piece' ,rating: "★★★★☆" },
    { title: 'Attack on Titan', author: 'Hajime Isayama', imgSrc: 'https://placehold.co/150x200', alt: 'Attack on Titan' ,rating: "★★★★☆" },
    { title: 'Naruto', author: 'Masashi Kishimoto', imgSrc: 'https://placehold.co/150x200', alt: 'Naruto',rating: "★★★★☆"  },
    { title: 'My Hero Academia', author: 'Kohei Horikoshi', imgSrc: 'https://placehold.co/150x200', alt: 'My Hero Academia',rating: "★★★★☆"  },
    { title: 'Demon Slayer', author: 'Koyoharu Gotouge', imgSrc: 'https://placehold.co/150x200', alt: 'Demon Slayer',rating: "★★★★☆"  },
    { title: 'Death Note', author: 'Tsugumi Ohba', imgSrc: 'https://placehold.co/150x200', alt: 'Death Note',rating: "★★★★☆"  },
    { title: 'One Punch Man', author: 'ONE', imgSrc: 'https://placehold.co/150x200', alt: 'One Punch Man',rating: "★★★★☆"  },
    { title: 'Tokyo Ghoul', author: 'Sui Ishida', imgSrc: 'https://placehold.co/150x200', alt: 'Tokyo Ghoul',rating: "★★★★☆"  },
    { title: 'Dragon Ball', author: 'Akira Toriyama', imgSrc: 'https://placehold.co/150x200', alt: 'Dragon Ball' ,rating: "★★★★☆" },
    { title: 'Bleach', author: 'Tite Kubo', imgSrc: 'https://placehold.co/150x200', alt: 'Bleach',rating: "★★★★☆"  },
    { title: 'Fullmetal Alchemist', author: 'Hiromu Arakawa', imgSrc: 'https://placehold.co/150x200', alt: 'Fullmetal Alchemist',rating: "★★★★☆"  },
    { title: 'Black Clover', author: 'Yūki Tabata', imgSrc: 'https://placehold.co/150x200', alt: 'Black Clover' ,rating: "★★★★☆" },
    { title: 'Hunter × Hunter', author: 'Yoshihiro Togashi', imgSrc: 'https://placehold.co/150x200', alt: 'Hunter × Hunter' ,rating: "★★★★☆" },
    { title: 'Fairy Tail', author: 'Hiro Mashima', imgSrc: 'https://placehold.co/150x200', alt: 'Fairy Tail' ,rating: "★★★★☆" },
    { title: 'Sword Art Online', author: 'Reki Kawahara', imgSrc: 'https://placehold.co/150x200', alt: 'Sword Art Online',rating: "★★★★☆"  },
    { title: 'One Piece', author: 'Eiichiro Oda', imgSrc: 'https://placehold.co/150x200', alt: 'One Piece' ,rating: "★★★★☆" },
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
            Manga 🥷
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-zinc-400 mt-5"
          >
            Trying to become one of your Anime villains? Start here with One Punch Man so much more...
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
        <h2 className="text-2xl font-semibold mb-6">Manga to Read</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {manga.map(item => (
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
              <span className="text-yellow-500">{item.rating}</span>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Manga;
