import React from 'react';

// Constants for repeated class names
const hoverUnderline = 'hover:underline';
const textCenter = 'text-center';
const mxAutoMb4 = 'mx-auto mb-4';
const imgClass = 'transform transition duration-300 hover:scale-105 hover:shadow-lg';

const Books = () => {
  const books = [
    { title: 'Farsighted', author: 'Steven Johnson', imgSrc: 'https://placehold.co/150x200', alt: 'Farsighted' },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', imgSrc: 'https://placehold.co/150x200', alt: 'Thinking, Fast and Slow' },
    { title: 'The Coddling of the American Mind', author: 'Greg Lukianoff and Jonathan Haidt', imgSrc: 'https://placehold.co/150x200', alt: 'The Coddling of the American Mind' },
    { title: 'The Laws of Simplicity', author: 'John Maeda', imgSrc: 'https://placehold.co/150x200', alt: 'The Laws of Simplicity' },
    { title: 'Farsighted', author: 'Steven Johnson', imgSrc: 'https://placehold.co/150x200', alt: 'Farsighted' },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', imgSrc: 'https://placehold.co/150x200', alt: 'Thinking, Fast and Slow' },
    { title: 'The Coddling of the American Mind', author: 'Greg Lukianoff and Jonathan Haidt', imgSrc: 'https://placehold.co/150x200', alt: 'The Coddling of the American Mind' },
    { title: 'The Laws of Simplicity', author: 'John Maeda', imgSrc: 'https://placehold.co/150x200', alt: 'The Laws of Simplicity' },
    { title: 'Farsighted', author: 'Steven Johnson', imgSrc: 'https://placehold.co/150x200', alt: 'Farsighted' },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', imgSrc: 'https://placehold.co/150x200', alt: 'Thinking, Fast and Slow' },
    { title: 'The Coddling of the American Mind', author: 'Greg Lukianoff and Jonathan Haidt', imgSrc: 'https://placehold.co/150x200', alt: 'The Coddling of the American Mind' },
    { title: 'The Laws of Simplicity', author: 'John Maeda', imgSrc: 'https://placehold.co/150x200', alt: 'The Laws of Simplicity' },
    { title: 'Farsighted', author: 'Steven Johnson', imgSrc: 'https://placehold.co/150x200', alt: 'Farsighted' },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', imgSrc: 'https://placehold.co/150x200', alt: 'Thinking, Fast and Slow' },
    { title: 'The Coddling of the American Mind', author: 'Greg Lukianoff and Jonathan Haidt', imgSrc: 'https://placehold.co/150x200', alt: 'The Coddling of the American Mind' },
    { title: 'The Laws of Simplicity', author: 'John Maeda', imgSrc: 'https://placehold.co/150x200', alt: 'The Laws of Simplicity' },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <header className="flex items-center mb-8">
        <div>
          <span className='text-white font-bold text-9xl'>
            Books 😎
          </span>
        </div>
        <nav className="space-x-4 cursor-pointer">
          {['Journal', 'Sketches', 'Shop', 'Podcast', 'About'].map(link => (
            <a href="#" key={link} className={hoverUnderline}>
              {link}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <h2 className="text-2xl font-semibold mb-6">Books to Read</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {books.map(book => (
            <div key={book.title} className={`${textCenter} transition duration-300 hover:text-yellow-500 cursor-pointer`}>
              <img src={book.imgSrc} alt={book.alt} className={`${mxAutoMb4} ${imgClass}`} />
              <h3 className="font-bold">{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Books;
