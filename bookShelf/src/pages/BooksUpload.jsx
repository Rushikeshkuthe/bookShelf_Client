// import React, { useState } from 'react';
// import bg from '../assets/bg.jpg';
// import { useNavigate } from 'react-router-dom';
// import { apiPOST } from '../utils/apiHelpers';
// import { motion } from 'framer-motion';

// const fullCentered = "flex items-center justify-center min-h-screen";
// const inputClasses = "w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none";

// const BooksUpload = () => {
//   const [loading, setLoading] = useState(false);
//   const [formValues, setFormValues] = useState({
//     bookname: '',
//     author: '',
//     rating: '',
//     category: '',
//     pages: '',
//     published: '',
//     ISBN: ''
//   });
//   const [pdfFile, setPdfFile] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [error, setError] = useState('');
//   const [isHovered, setIsHovered] = useState(false);

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value
//     });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (name === 'pdf') {
//       setPdfFile(files[0]);
//     } else if (name === 'image') {
//       setImageFile(files[0]);
//     }
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const formData = new FormData();
//       formData.append('bookname', String(formValues.bookname));
//       formData.append('author', String(formValues.author));
//       formData.append('rating', String(formValues.rating));
//       formData.append('category', String(formValues.category));
//       formData.append('pages', String(formValues.pages));
//       formData.append('published', String(formValues.published));
//       formData.append('ISBN', String(formValues.ISBN));
//       formData.append('pdf', pdfFile);
//       formData.append('image', imageFile);

//       const response = await apiPOST(`v1/book/add-book`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.data.status === true) {
//         setFormValues({
//           bookname: '',
//           author: '',
//           rating: '',
//           category: '',
//           pages: '',
//           published: '',
//           ISBN: ''
//         });
//         setPdfFile(null);
//         setImageFile(null);
//       } else {
//         setError('Upload failed. Please try again.');
//       }

//     } catch (error) {
//       setError('An error occurred during upload. Please try again.');
//       console.error('An error occurred during upload:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className={`relative z-10 ${fullCentered}`}>
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full"
//         >
//           <h1 className="text-5xl font-semibold text-white text-center mb-6">Upload Book</h1>
//           <form className="space-y-4" onSubmit={handleUpload}>
//             <motion.input
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               type="text"
//               name="bookname"
//               value={formValues.bookname}
//               onChange={handleInputChange}
//               placeholder="Book Name"
//               className={inputClasses}
//               required
//             />
//             <motion.input
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               type="text"
//               name="author"
//               value={formValues.author}
//               onChange={handleInputChange}
//               placeholder="Author"
//               className={inputClasses}
//               required
//             />
//             <motion.input
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               type="text"
//               name="rating"
//               value={formValues.rating}
//               onChange={handleInputChange}
//               placeholder="Rating"
//               className={inputClasses}
//               required
//             />
//             <motion.input
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               type="text"
//               name="category"
//               value={formValues.category}
//               onChange={handleInputChange}
//               placeholder="Category"
//               className={inputClasses}
//               required
//             />
//             <motion.input
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               type="number"
//               name="pages"
//               value={formValues.pages}
//               onChange={handleInputChange}
//               placeholder="Pages"
//               className={inputClasses}
//               required
//             />
//             <motion.input
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               type="date"
//               name="published"
//               value={formValues.published}
//               onChange={handleInputChange}
//               placeholder="Published Date"
//               className={inputClasses}
//               required
//             />
//             <motion.input
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//               type="text"
//               name="ISBN"
//               value={formValues.ISBN}
//               onChange={handleInputChange}
//               placeholder="ISBN"
//               className={inputClasses}
//               required
//             />
//             <motion.input
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//               type="file"
//               name="pdf"
//               onChange={handleFileChange}
//               className={inputClasses}
//               required
//             />
//             <motion.input
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//               type="file"
//               name="image"
//               onChange={handleFileChange}
//               className={inputClasses}
//               required
//             />
//             {error && <p className="text-red-500">{error}</p>}
//             <motion.button
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.0 }}
//               type="submit"
//               className="w-full p-3 rounded-lg bg-black text-white font-semibold"
//               disabled={loading}
//               onHoverStart={() => setIsHovered(true)}
//               onHoverEnd={() => setIsHovered(false)}
//             >
//               {loading ? 'Uploading...' : (isHovered ? 'Upload Now!' : 'UPLOAD')}
//             </motion.button>
//           </form>
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.1 }}
//             className='flex flex-col items-center'
//             onClick={() => navigate("/books")}
//           >
//             <p className="text-center text-white mt-4">
//               View all books?
//             </p>
//             <a className='cursor-pointer font-bold text-white '>BOOKS</a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default BooksUpload;
// BookUpload.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { apiPOST } from '../utils/apiHelpers';

const BookUpload = () => {
    const [bookData, setBookData] = useState({
        bookname: '',
        author: '',
        rating: '',
        category: '',
        pages: '',
        published: '',
        ISBN: '',
        pdfPath: '',
        imagePath: '',
    });

    const [filePaths, setFilePaths] = useState({
        pdfPath: '',
        imagePath: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({
            ...bookData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFilePaths({
            ...filePaths,
            [name]: files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('pdfPath', filePaths.pdfPath);
            formData.append('imagePath', filePaths.imagePath);
            Object.keys(bookData).forEach((key) => {
                formData.append(key, bookData[key]);
            });

            const response = await apiPOST(`v1/book/add-book`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
            // Handle success, e.g., show a success message
        } catch (error) {
            console.error('Error:', error);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <div className='bg-white'>
            <h2>Upload Book</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Book Name:
                    <input type="text" name="bookname" value={bookData.bookname} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Author:
                    <input type="text" name="author" value={bookData.author} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Rating:
                    <input type="text" name="rating" value={bookData.rating} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Category:
                    <input type="text" name="category" value={bookData.category} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Pages:
                    <input type="number" name="pages" value={bookData.pages} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Published:
                    <input type="text" name="published" value={bookData.published} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    ISBN:
                    <input type="text" name="ISBN" value={bookData.ISBN} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    PDF File:
                    <input type="file" name="pdfPath" onChange={handleFileChange} required />
                </label>
                <br />
                <label>
                    Image File:
                    <input type="file" name="imagePath" onChange={handleFileChange} required />
                </label>
                <br />
                <button type="submit">Upload Book</button>
            </form>
        </div>
    );
};

export default BookUpload;
