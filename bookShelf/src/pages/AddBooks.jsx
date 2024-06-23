
import React, { useState } from 'react';
import axios from 'axios';
import {Select, message } from "antd";

const AddBook = () => {
    const [bookData, setBookData] = useState({
        bookname: '',
        author: '',
        rating: '',
        category: 'Sci-Fi',
        pages: '',
        published: '',
        ISBN: '',
        favorite: false,
        latest:false,
        pdf: null,
        image: null,
         bookSummary: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setBookData(prevState => ({
            ...prevState,
            [name]: files[0]
        }));
    };
    
    const handleToggleChange = (e) => {
        const { name, checked } = e.target;
        setBookData(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in bookData) {
            formData.append(key, bookData[key]);
        }

        try {
            const response = await axios.post('http://localhost:5001/v1/book/add-book', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response?.data?.status != 200) {
                message.error(response.data.message);
              } else {
                message.success(response.data.message);
              }
        } catch (error) {
            message.error(error.message)
        }
    };

    const handleCategoryChange = (value) => {
        setBookData(prevState => ({
            ...prevState,
            category: value
        }));
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-5">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl text-white mb-6 text-center">Add a New Book</h1>
                {[
                    { label: 'Book Name', name: 'bookname', type: 'text' },
                    { label: 'Author', name: 'author', type: 'text' },
                    { label: 'Rating', name: 'rating', type: 'number' },
                    { label: 'Pages', name: 'pages', type: 'number' },
                    { label: 'Published', name: 'published', type: 'date' },
                    { label: 'ISBN', name: 'ISBN', type: 'text' },
                   
                ].map(({ label, name, type }) => (
                    <div key={name} className="mb-4">
                        <label className="block text-gray-300 mb-2">{label}:</label>
                        <input
                            type={type}
                            name={name}
                            value={bookData[name]}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                ))}
                  <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Category:</label>
                    <Select
                        value={bookData.category}
                        onChange={handleCategoryChange}
                        className="w-full bg-gray-700 text-white"
                        required
                    >
                        <Option value="Sci-Fi">Sci-Fi</Option>
                        <Option value="Fantasy">Fantasy</Option>
                        <Option value="Drama">Drama</Option>
                        <Option value="Business">Business</Option>
                        <Option value="Education">Education</Option>
                        <Option value="Kids">Kids</Option>
                        <Option value="Manga">Manga</Option>
                        <Option value="Philosophy">Philosophy</Option>
                        <Option value="Geography">Geography</Option>
                    </Select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">PDF:</label>
                    <input
                        type="file"
                        name="pdf"
                        onChange={handleFileChange}
                        className="w-full text-gray-300 focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Image:</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        className="w-full text-gray-300 focus:outline-none"
                        required
                    />
                </div>
                <div className=" flex items-center gap-2 mb-2">
                    <label className="block text-gray-300 ">Latest:</label>
                    <input
                        type="checkbox"
                        name="latest"
                        checked={bookData.latest}
                        onChange={handleToggleChange}
                        // className="w-full text-gray-300 focus:outline-none"
                    />
                </div>
                <div className=" flex items-center gap-2 mb-2">
                    <label className="block text-gray-300 ">Book Info</label>
                    <textarea
                                name="bookSummary"
                                value={bookData.bookSummary}
                                onChange={handleChange}
                                className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                rows="4"
                                required
                            />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
