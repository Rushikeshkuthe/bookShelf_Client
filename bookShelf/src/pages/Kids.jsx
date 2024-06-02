// Kids.jsx

import React from 'react';

// Constants for repeated class names
const hoverUnderline = 'hover:underline';
const textCenter = 'text-center';
const mxAutoMb4 = 'mx-auto mb-4';
const imgClass = 'transform transition duration-300 hover:scale-105 hover:shadow-lg';

const Kids = () => {
  const kidsItems = [
    { title: 'Diary of a Wimpy Kid', author: 'Jeff Kinney', imgSrc: 'https://placehold.co/150x200', alt: 'Diary of a Wimpy Kid' },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', imgSrc: 'https://placehold.co/150x200', alt: 'Harry Potter and the Sorcerer\'s Stone' },
    { title: 'Percy Jackson & the Olympians: The Lightning Thief', author: 'Rick Riordan', imgSrc: 'https://placehold.co/150x200', alt: 'Percy Jackson & the Olympians: The Lightning Thief' },
    { title: 'The Cat in the Hat', author: 'Dr. Seuss', imgSrc: 'https://placehold.co/150x200', alt: 'The Cat in the Hat' },
    { title: 'Where the Wild Things Are', author: 'Maurice Sendak', imgSrc: 'https://placehold.co/150x200', alt: 'Where the Wild Things Are' },
    { title: 'A Series of Unfortunate Events: The Bad Beginning', author: 'Lemony Snicket', imgSrc: 'https://placehold.co/150x200', alt: 'A Series of Unfortunate Events: The Bad Beginning' },
    { title: 'Matilda', author: 'Roald Dahl', imgSrc: 'https://placehold.co/150x200', alt: 'Matilda' },
    { title: 'Charlie and the Chocolate Factory', author: 'Roald Dahl', imgSrc: 'https://placehold.co/150x200', alt: 'Charlie and the Chocolate Factory' },
    { title: 'The Very Hungry Caterpillar', author: 'Eric Carle', imgSrc: 'https://placehold.co/150x200', alt: 'The Very Hungry Caterpillar' },
    { title: 'Green Eggs and Ham', author: 'Dr. Seuss', imgSrc: 'https://placehold.co/150x200', alt: 'Green Eggs and Ham' },
    { title: 'Wonder', author: 'R.J. Palacio', imgSrc: 'https://placehold.co/150x200', alt: 'Wonder' },
    { title: 'The Lightning Thief (Graphic Novel)', author: 'Rick Riordan', imgSrc: 'https://placehold.co/150x200', alt: 'The Lightning Thief (Graphic Novel)' },
    { title: 'The Adventures of Captain Underpants', author: 'Dav Pilkey', imgSrc: 'https://placehold.co/150x200', alt: 'The Adventures of Captain Underpants' },
    { title: 'Magic Tree House: Dinosaurs Before Dark', author: 'Mary Pope Osborne', imgSrc: 'https://placehold.co/150x200', alt: 'Magic Tree House: Dinosaurs Before Dark' },
    { title: 'Dog Man: Brawl of the Wild', author: 'Dav Pilkey', imgSrc: 'https://placehold.co/150x200', alt: 'Dog Man: Brawl of the Wild' },
    { title: 'The Secret Garden', author: 'Frances Hodgson Burnett', imgSrc: 'https://placehold.co/150x200', alt: 'The Secret Garden' },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <header className="flex items-center mb-8">
        <div>
          <span className='text-white font-bold text-9xl'>
            Kids 👶🏼
          </span>
          <p className="text-zinc-400 mt-14">Where Stories Sparkle and Imaginations Soar!</p>
        </div>
        
      </header>

      <main>
        <h2 className="text-2xl font-semibold mb-6">Books for Kids</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {kidsItems.map(item => (
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

export default Kids;
