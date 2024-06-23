// import React from 'react';
// import { motion } from 'framer-motion';
// import { Button } from 'antd';

// const sharedButtonClasses = "bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-4 py-2 rounded-lg";
// const sharedTagClasses = "bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-2 py-1 rounded-lg";
// const sharedCardClasses = "bg-zinc-200 dark:bg-zinc-800 p-4 rounded-lg shadow-lg";

// const BookHeader = () => (
//   <div>
//     <h1 className="text-4xl font-bold">Leviathan Wakes</h1>
//     <p className="text-xl text-blue-600 dark:text-blue-400">by James S. Corey</p>
//   </div>
// );

// const BookImage = () => (
//   <div className="md:w-1/3">
//     <img src="https://placehold.co/200x300" alt="Leviathan Wakes" className="rounded-lg shadow-lg" />
//   </div>
// );

// const BookButtons = () => (
//   <div className="flex space-x-2 mb-4">
//     <button className={sharedButtonClasses}>Want to Read</button>
//     <button className={sharedButtonClasses}>Reading</button>
//     <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Read</button>
//   </div>
// );

// const BookDetails = () => (
//   <div className={sharedCardClasses}>
//     <div className="flex justify-between">
//       <p>3 Ratings</p>
//       <p>⭐⭐⭐⭐</p>
//     </div>
//     <div className="flex justify-between">
//       <p>Pages</p>
//       <p>520</p>
//     </div>
//     <div className="flex justify-between">
//       <p>Published</p>
//       <p>May 1st 2012</p>
//     </div>
//     <div className="flex justify-between">
//       <p>ISBN</p>
//       <p>9781451648546</p>
//     </div>
//   </div>
// );

// const BookOverview = () => (
//   <div className="mt-8">
//     <div className="border-b border-zinc-300 dark:border-zinc-700">
//       <button className="text-lg font-semibold pb-2 border-b-2 border-blue-600">Overview</button>
//     </div>
//     <div className="mt-4">
//       <div className="flex space-x-2 mb-4">
//         <span className={sharedTagClasses}>Science Fiction</span>
//         <span className={sharedTagClasses}>Space</span>
//         <span className={sharedTagClasses}>Add tag</span>
//       </div>
//       <p>Humanity has colonized the solar system—Mars, the Moon, the Asteroid Belt and beyond—but the stars are still out of our reach.</p>
//       <p className="mt-4">Jim Holden is XO of an ice miner making runs from the rings of Saturn to the mining stations of the Belt. When he and his crew stumble upon a derelict ship, the Scopuli, they find themselves in possession of a secret they never wanted. A secret that...</p>
//     </div>
//   </div>
// );

// const SimilarBookCard = ({ imgSrc, title, author,rating }) => (
//   <div className={sharedCardClasses}>
//     <img src={imgSrc} alt={title} className="rounded-lg mb-2" />
//     <p className="font-semibold">{title}</p>
//     <p className="text-sm text-zinc-600 dark:text-zinc-400">by {author}</p>
//     <span className="text-yellow-500">{rating}</span>
//     <div className='flex items-center justify-start'>
//             <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//                 className='mt-2 w-60'
//             >
//                 <Button className='text-base font-bold'>View</Button>
//             </motion.div>
//         </div>
//   </div>
// );

// const SimilarBooks = () => (
//   <div className="mt-8">
//     <h2 className="text-2xl font-bold">Similar Books</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
//       <SimilarBookCard imgSrc="https://placehold.co/150x200" title="Book Title 1" author="Author 1" rating="★★★★☆"/>
//       <SimilarBookCard imgSrc="https://placehold.co/150x200" title="Book Title 2" author="Author 2" rating="★★★★☆"/>
//       <SimilarBookCard imgSrc="https://placehold.co/150x200" title="Book Title 3" author="Author 3" rating="★★★★☆"/>
//       <SimilarBookCard imgSrc="https://placehold.co/150x200" title="Book Title 4" author="Author 4" rating="★★★★☆"/>
//        <SimilarBookCard imgSrc="https://placehold.co/150x200" title="Book Title 1" author="Author 1" rating="★★★★☆"/>
//       <SimilarBookCard imgSrc="https://placehold.co/150x200" title="Book Title 2" author="Author 2" rating="★★★★☆"/>
//       <SimilarBookCard imgSrc="https://placehold.co/150x200" title="Book Title 3" author="Author 3" rating="★★★★☆"/>
//       <SimilarBookCard imgSrc="https://placehold.co/150x200" title="Book Title 4" author="Author 4" rating="★★★★☆"/>
//     </div>
//   </div>
// );

// const SingleBook = () => (
//   <div className="min-h-screen bg-zinc-100 dark:bg-black text-zinc-900 dark:text-zinc-100 p-4">
//     <div className="max-w-full mx-auto">
//       <BookHeader />
//       <div className="flex flex-col md:flex-row mt-8">
//         <BookImage />
//         <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
//           <BookButtons />
//           <BookDetails />
//         </div>
//       </div>
//       <BookOverview />
//       <SimilarBooks />
//     </div>
//   </div>
// );

// export default SingleBook;





import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "antd";
import { apiGET } from "../utils/apiHelpers";


const SingleBook = () => {
  const sharedTagClasses =
    "bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-2 py-1 rounded-lg";
  const sharedCardClasses =
    "bg-zinc-200 dark:bg-zinc-800 p-4 rounded-lg shadow-lg";

  const formatDate = (publishedDate) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(publishedDate).toLocaleDateString("en-GB", options);
  };
  const { id } = useParams(); 

  const [book, setBook] = useState(null);
  
  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await apiGET(`v1/book/getBook/${id}`); // Adjust the API endpoint as per your setup
        console.log(response);
        if (response.data.status === 200) {
          setBook(response.data.data);
          console.log(response.data.data)
        } else {
          console.error("Something went wrong");
        }
      } catch (error) {
        console.error("Error While fetching API: ", error);
      }
    }
  
    fetchBook();
  }, [id]);



  if (!book) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-black text-zinc-900 dark:text-zinc-100 p-4">
      <div className="max-w-full mx-auto">
        <div>
          <h1 className="text-4xl font-bold">{book.bookname}</h1>
          <p className="text-xl text-blue-600 dark:text-blue-400">
            by {book.author}
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="md:w-1/3">
            <motion.img
              src={`http://localhost:5001/${book.imagePath}`}
              alt={book.bookname}
              className="rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
            <div className="flex space-x-2 mb-4">
              <a
                type="primary"
                href={`http://localhost:5001/${book.pdfPath}`}
                download={`${book.bookname}.pdf`}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Want To Read
              </a>
            </div>
            <div className={sharedCardClasses}>
              <div className="flex justify-between">
                <p>Ratings</p>
                <p>{book.rating}</p>
              </div>
              <div className="flex justify-between">
                <p>Pages</p>
                <p>{book.pages}</p>
              </div>
              <div className="flex justify-between">
                <p>Published</p>
                <p>{formatDate(book.published)}</p>
              </div>
              <div className="flex justify-between">
                <p>ISBN</p>
                <p>{book.ISBN}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="border-b border-zinc-300 dark:border-zinc-700">
            <button className="text-lg font-semibold pb-2 border-b-2 border-blue-600">
              Overview
            </button>
          </div>
          <div className="mt-4">
            <div className="flex space-x-2 mb-4">
              <span className={sharedTagClasses}>{book.category}</span>
            </div>
            <p>{book.bookSummary}</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default SingleBook;
