import React from 'react';
import { motion } from 'framer-motion';
import { LuReply } from "react-icons/lu";


// Constants for repeated class names
const containerClass = "bg-zinc-800 shadow-md rounded-lg p-4 mb-4 cursor-pointer";
const flexCenterClass = "flex w-full items-center";
const textZinc300Mb2 = "text-zinc-300 mb-2";
const flexBetweenClass = "flex items-center justify-between";
const textZinc400TextSm = "text-zinc-400 text-sm";
const textRed500FontSemibold = "text-red-500 font-semibold";

// Review component for individual book entries
function ReviewItem({ title, rating, description, time, price, imageUrl }) {
  return (
    <motion.div
      className={containerClass}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
    >
      <div className={`${flexCenterClass} mb-2`}>
        <img className="w-12 h-12 rounded-full mr-4" src={imageUrl} alt="Book cover" />
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className={flexCenterClass}>
            <span className="text-yellow-500">{rating}</span>
          </div>
        </div>
      </div>
      <p className={textZinc300Mb2}>{description}</p>
      <div className={flexBetweenClass}>
        <span className={textZinc400TextSm}>{time}</span>
        <span className={textRed500FontSemibold}><button>Reply</button></span>
      </div>
    </motion.div>
  );
}

// Main Review component
function Reviews() {
  // Sample data for reviews
  const reviews = [
    {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    }, {
      title: "Book Title",
      rating: "★★★★☆",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      time: "Today, 6:40 PM",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      imageUrl: "https://placehold.co/100x100"
    },
   
  ];

  return (
    <div className="bg-black min-h-screen p-4 w-full">
      <div>
        <span className='text-white font-bold text-6xl'>
          Reviews 🤔
        </span>
        <p className="text-zinc-400 mt-14">Interesting Bak Bak I should take a part</p>
      </div>
      <div className="w-3/4 mx-auto mt-20">
        {reviews.map((review, index) => (
          <ReviewItem key={index} {...review} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
