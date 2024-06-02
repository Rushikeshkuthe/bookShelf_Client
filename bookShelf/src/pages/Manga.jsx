// Manga.jsx

import React from 'react';

// Constants for repeated class names
const hoverUnderline = 'hover:underline';
const textCenter = 'text-center';
const mxAutoMb4 = 'mx-auto mb-4';
const imgClass = 'transform transition duration-300 hover:scale-105 hover:shadow-lg';

const Manga = () => {
  const manga = [
    { title: 'One Piece', author: 'Eiichiro Oda', imgSrc: 'https://placehold.co/150x200', alt: 'One Piece' },
    { title: 'Attack on Titan', author: 'Hajime Isayama', imgSrc: 'https://placehold.co/150x200', alt: 'Attack on Titan' },
    { title: 'Naruto', author: 'Masashi Kishimoto', imgSrc: 'https://placehold.co/150x200', alt: 'Naruto' },
    { title: 'My Hero Academia', author: 'Kohei Horikoshi', imgSrc: 'https://placehold.co/150x200', alt: 'My Hero Academia' },
    { title: 'Demon Slayer', author: 'Koyoharu Gotouge', imgSrc: 'https://placehold.co/150x200', alt: 'Demon Slayer' },
    { title: 'Death Note', author: 'Tsugumi Ohba', imgSrc: 'https://placehold.co/150x200', alt: 'Death Note' },
    { title: 'One Punch Man', author: 'ONE', imgSrc: 'https://placehold.co/150x200', alt: 'One Punch Man' },
    { title: 'Tokyo Ghoul', author: 'Sui Ishida', imgSrc: 'https://placehold.co/150x200', alt: 'Tokyo Ghoul' },
    { title: 'Dragon Ball', author: 'Akira Toriyama', imgSrc: 'https://placehold.co/150x200', alt: 'Dragon Ball' },
    { title: 'Bleach', author: 'Tite Kubo', imgSrc: 'https://placehold.co/150x200', alt: 'Bleach' },
    { title: 'Fullmetal Alchemist', author: 'Hiromu Arakawa', imgSrc: 'https://placehold.co/150x200', alt: 'Fullmetal Alchemist' },
    { title: 'Black Clover', author: 'Yūki Tabata', imgSrc: 'https://placehold.co/150x200', alt: 'Black Clover' },
    { title: 'Hunter × Hunter', author: 'Yoshihiro Togashi', imgSrc: 'https://placehold.co/150x200', alt: 'Hunter × Hunter' },
    { title: 'Fairy Tail', author: 'Hiro Mashima', imgSrc: 'https://placehold.co/150x200', alt: 'Fairy Tail' },
    { title: 'Sword Art Online', author: 'Reki Kawahara', imgSrc: 'https://placehold.co/150x200', alt: 'Sword Art Online' },
    { title: 'One Piece', author: 'Eiichiro Oda', imgSrc: 'https://placehold.co/150x200', alt: 'One Piece' },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <header className="flex items-center mb-8">
        <div>
          <span className='text-white font-bold text-9xl '>
            Manga 🥷
          </span>
          <p className="text-zinc-400 mt-14">Tring to become one of your Anime viilan try it here can start with -one punch man,Naruto,jujutsusao much more..........</p>
        </div>
       
      </header>

      <main>
        <h2 className="text-2xl font-semibold mb-6">Manga to Read</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {manga.map(item => (
            <div key={item.title} className={`${textCenter} transition duration-300 hover:text-yellow-500 cursor-pointer`}>
              <img src={item.imgSrc} alt={item.alt} className={`${mxAutoMb4} ${imgClass}`} />
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.author}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Manga;
