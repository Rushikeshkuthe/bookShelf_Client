import React from 'react';
import { BsClockHistory } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";

// Constants for repeated class strings
const roundedFull = "rounded-full";
const bgGreen500P3 = "bg-green-500 p-3";
const bgZinc800P4 = "bg-zinc-800 p-4";
const flexRowItemsCenter = "flex items-center";
const flexRowSpaceBetween = "flex justify-between";
const bgBlackTextWhite = "bg-black text-white";
const flexSpaceX4 = "flex space-x-4";

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
    <div className={`${bgZinc800P4} ${flexRowItemsCenter} rounded-lg mb-4`}>
      <img src={book.imageUrl} alt={book.title} className={`w-12 h-12 ${roundedFull} mr-4`} />
      <div className="flex items-center w-full">
        <div className="flex-1">
          <div className="text-white font-bold">{book.title}</div>
          <div className="text-zinc-400">{book.author}</div>
        </div>
        <div className="flex-1">
          <div className="text-zinc-400">{book.dateAdded}</div>
        </div>
        <div className="flex-1">
          <div className="text-zinc-400">{book.pages} pages</div>
        </div>
      </div>
    </div>
  );
}

// Main component
function Recent() {
  return (
    <div className={`${bgBlackTextWhite} p-6 min-h-screen`}>
      <div className={`${flexRowItemsCenter} ${flexSpaceX4} mb-6`}>
        <div>
          <span className='text-white font-bold text-7xl'>
            Recent 🤐👧🏼
          </span>
          <p className="text-zinc-400">Hide my Collection from my fav one (32 Books)</p>
        </div>
      </div>
      <div className={`${flexRowItemsCenter} ${flexSpaceX4} mb-6`}>
        <input type="text" placeholder="Search Book" className="bg-zinc-800 text-white p-2 rounded-lg w-1/3" />
        <button className={`${bgGreen500P3} ${roundedFull}`}>
          <BsClockHistory />
        </button>
        <button className={`${bgGreen500P3} ${roundedFull}`}>
          <IoMdDownload />
        </button>
      </div>
      <div className={`${flexRowItemsCenter} ${flexSpaceX4} text-zinc-400 mb-4 ml-14`}>
        <div className="flex-1">Title</div>
        <div className="flex-1">Date Added</div>
        <div className="flex-1">Pages</div>
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
