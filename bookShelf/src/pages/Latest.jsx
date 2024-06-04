import React from 'react';
import { motion } from 'framer-motion';
import { Input } from 'antd';

// Constants for repeated class names
const hoverUnderline = 'hover:underline';
const textCenter = 'text-center';
const mxAutoMb4 = 'mx-auto mb-4';
const imgClass = 'transform transition duration-300 hover:scale-105 hover:shadow-lg';

const Latest = () => {
  const latestItems = [
    { title: 'Jujutsu Kaisen', author: 'Gege Akutami', imgSrc: 'https://placehold.co/150x200', alt: 'Jujutsu Kaisen' ,type:'Magazine',rating: "★★★★☆"},
    { title: 'My Hero Academia', author: 'Kohei Horikoshi', imgSrc: 'https://placehold.co/150x200', alt: 'My Hero Academia',type:'Book' ,rating: "★★★★☆"},
    { title: 'Attack on Titan', author: 'Hajime Isayama', imgSrc: 'https://placehold.co/150x200', alt: 'Attack on Titan',type:'Article',rating: "★★★★☆" },
    { title: 'Tokyo Revengers', author: 'Ken Wakui', imgSrc: 'https://placehold.co/150x200', alt: 'Tokyo Revengers',type:'Magazine' ,rating: "★★★★☆"},
    { title: 'One Piece', author: 'Eiichiro Oda', imgSrc: 'https://placehold.co/150x200', alt: 'One Piece',type:'Podcast' ,rating: "★★★★☆"},
    { title: 'Demon Slayer', author: 'Koyoharu Gotouge', imgSrc: 'https://placehold.co/150x200', alt: 'Demon Slayer',type:'Audio' ,rating: "★★★★☆"},
    { title: 'Naruto', author: 'Masashi Kishimoto', imgSrc: 'https://placehold.co/150x200', alt: 'Naruto',type:'Magazine',rating: "★★★★☆" },
    { title: 'Death Note', author: 'Tsugumi Ohba', imgSrc: 'https://placehold.co/150x200', alt: 'Death Note',type:'Podcast',rating: "★★★★☆" },
    { title: 'Bleach', author: 'Tite Kubo', imgSrc: 'https://placehold.co/150x200', alt: 'Bleach',type:'Journal' ,rating: "★★★★☆"},
    { title: 'Fullmetal Alchemist', author: 'Hiromu Arakawa', imgSrc: 'https://placehold.co/150x200', alt: 'Fullmetal Alchemist',type:'Podcast' ,rating: "★★★★☆"},
    { title: 'Black Clover', author: 'Yūki Tabata', imgSrc: 'https://placehold.co/150x200', alt: 'Black Clover',type:'Magazine' ,rating: "★★★★☆"},
    { title: 'Hunter × Hunter', author: 'Yoshihiro Togashi', imgSrc: 'https://placehold.co/150x200', alt: 'Hunter × Hunter',type:'Journal' ,rating: "★★★★☆"},
    { title: 'Fairy Tail', author: 'Hiro Mashima', imgSrc: 'https://placehold.co/150x200', alt: 'Fairy Tail',type:'Magazine' ,rating: "★★★★☆"},
    { title: 'Sword Art Online', author: 'Reki Kawahara', imgSrc: 'https://placehold.co/150x200', alt: 'Sword Art Online',type:'Audio' ,rating: "★★★★☆"},
    { title: 'One Punch Man', author: 'ONE', imgSrc: 'https://placehold.co/150x200', alt: 'One Punch Man' ,type:'Journal',rating: "★★★★☆"},
    { title: 'Attack on Titan', author: 'Hajime Isayama', imgSrc: 'https://placehold.co/150x200', alt: 'Attack on Titan',type:'Audio' ,rating: "★★★★☆"},
  ];

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
            Latest 😃
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
          />
        </div>
      </header>

      <main>
        <h2 className="text-2xl font-semibold mb-6">Latest Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {latestItems.map(item => (
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
               <p className='opacity-50'>{item.type}</p>
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

export default Latest;
