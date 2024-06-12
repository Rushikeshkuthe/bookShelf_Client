// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Input } from 'antd';
// import { apiGET } from '../utils/apiHelpers';


// const hoverUnderline = 'hover:underline';
// const textCenter = 'text-center';
// const mxAutoMb4 = 'mx-auto mb-4';
// const imgClass = 'transform transition duration-300 hover:scale-105 hover:shadow-lg';

// const Books = () => {
//   const [loading, setLoading] = useState(false);
//   const[bookData,setBookData] = useState([]);

//   async function getAllBooks(){
//     setLoading(true);
//     try{
//       const response = await apiGET(`v1/getAllBook`)
//       if(response.data.status==200){
//         console.log(response.data)
//         setBookData(response.data.data)
//       }
//       else{
//         return message.error(response.data?.message || "Something went wrong");
//       }
//     }catch{
//       console.log("Error While fetching API: ", error);
//       message.error(error?.message);
//     }finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getAllBooks();
//   });

//   return (
//     <div className="bg-black text-white min-h-screen p-4">
//       <header className="flex items-center mb-8">
//         <div className='w-full flex items-center justify-between'>
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className='text-white font-bold text-6xl'
//           >
//             Books 😎
//           </motion.span>
//           <div>
//         <nav className="space-x-4 cursor-pointer">
//           {['Journal', 'Article', 'Audio', 'Podcast' ,'Magazine'].map(link => (
//             <motion.a
//               key={link}
//               href="#"
//               className={hoverUnderline}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {link}
//             </motion.a>
//           ))}
//         </nav>
//         </div>
//           <div className=' w-1/3'>
//           <Input.Search
//             placeholder="Search books"
//             className="w-full"
//             enterButton
//           />
//         </div>
        
//         </div>
        
//       </header>

//       <main>
//         <h2 className="text-2xl font-semibold mb-6">Books to Read</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {bookData.map(book => (
//             <motion.div
//               key={book.bookname}
//               className={`${textCenter} transition duration-300 hover:text-yellow-500 cursor-pointer`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <motion.img
//                 src={book.imagePath}
//                 className={`${mxAutoMb4} ${imgClass}`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <h3 className="font-bold">{book.title}</h3>
//               <p>{book.author}</p>
//               <span className="text-yellow-500">{book.rating}</span>
//             </motion.div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Books;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from 'antd';
import { apiGET } from '../utils/apiHelpers';

const hoverUnderline = 'hover:underline';
const textCenter = 'text-center';
const mxAutoMb4 = 'mx-auto mb-4';
const imgClass = 'transform transition duration-300 hover:scale-105 hover:shadow-lg';

const Books = () => {
  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState([]);

  async function getAllBooks() {
    setLoading(true);
    try {
      const response = await apiGET('v1/book/getAllBook');
      if (response.data.status === 200) {
        setBookData(response.data.data); // Assuming response.data.data is an array of books
      } else {
        console.error('Something went wrong');
      }
    } catch (error) {
      console.error('Error While fetching API: ', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllBooks();
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <header className="flex items-center mb-8">
        <div className="w-full flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white font-bold text-6xl"
          >
            Books 😎
          </motion.span>
          <div>
            <nav className="space-x-4 cursor-pointer">
              {['Journal', 'Article', 'Audio', 'Podcast', 'Magazine'].map((link) => (
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
          <div className="w-1/3">
            <Input.Search placeholder="Search books" className="w-full" enterButton />
          </div>
        </div>
      </header>

      <main>
        <h2 className="text-2xl font-semibold mb-6">Books to Read</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {bookData.map((book) => (
            <motion.div
              key={book.bookname}
              className={`${textCenter} transition duration-300 hover:text-yellow-500 cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={book.imagePath} // Assuming imagePath is the correct field from your API response
                className={`${mxAutoMb4} ${imgClass}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                alt={book.bookname} // Assuming bookname is the correct field from your API response
              />
              <h3 className="font-bold">{book.title}</h3> {/* Assuming title is the correct field from your API response */}
              <p>{book.author}</p> {/* Assuming author is the correct field from your API response */}
              <span className="text-yellow-500">{book.rating}</span> {/* Assuming rating is the correct field from your API response */}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Books;
