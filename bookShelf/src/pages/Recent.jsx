import React from 'react';
import { BsClockHistory } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
// Constants for repeated class strings
const roundedFull = "rounded-full";
const bgGreen500P3 = "bg-green-500 p-3";
const gridCols5Gap4 = "grid grid-cols-5 gap-4";
const bgZinc800P4 = "bg-zinc-800 p-4";

// Book data could be dynamic, but for simplicity, it's hardcoded here
const books = [
  { title: "1984", author: "George Orwell", dateAdded: "One Day Ago", pages: 328, imageUrl: "https://placehold.co/50x50" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", dateAdded: "2 Weeks Ago", pages: 281, imageUrl: "https://placehold.co/50x50" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", dateAdded: "1 Month Ago", pages: 180, imageUrl: "https://placehold.co/50x50" },
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", dateAdded: "Mar 24, 2022", pages: 309, imageUrl: "https://placehold.co/50x50" }
];

// BookItem component for rendering each book
function BookItem({ book }) {
  return (
    <div className={`${bgZinc800P4} items-center rounded-lg`}>
      <img src={book.imageUrl} alt={book.title} className={`w-12 h-12 ${roundedFull}`} />
      <div>
        <p className="text-white font-bold">{book.title}</p>
        <p className="text-zinc-400">{book.author}</p>
      </div>
      <div>{book.dateAdded}</div>
      <div>{book.pages}</div>
    </div>
  );
}

// Main component
function Recent() {
  return (
    <div className="bg-black text-white p-6 min-h-screen">
      <div className="flex items-center space-x-4 mb-6">
        <div>
        <span className='text-white font-bold text-9xl'>
            Recent 🤐👧🏼
          </span>
          <p className="text-zinc-400">Hide my Collection from my fav one (32 Books)</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <input type="text" placeholder="Search Book" className="bg-zinc-800 text-white p-2 rounded-lg w-1/3" />
        <button className={`${bgGreen500P3} ${roundedFull}`}>
        <BsClockHistory />
        </button>
        <button className={`${bgGreen500P3} ${roundedFull}`}>
        <IoMdDownload />
        </button>
      </div>
      <div className={`${gridCols5Gap4} text-zinc-400 mb-4`}>
        <div>Title</div>
        <div>Author</div>
        <div>Date Added</div>
        <div>Pages</div>
      </div>
      <div className="space-y-4">
        {books.map(book => (
          <BookItem key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Recent;
