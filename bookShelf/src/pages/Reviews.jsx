import React from 'react';

// Constants for repeated class names
const containerClass = "bg-zinc-800  shadow-md rounded-lg p-4 mb-4";
const flexCenterClass = "flex w-full items-center";
const textZinc300Mb2 = "text-zinc-300 mb-2";
const flexBetweenClass = "flex items-center justify-between";
const textZinc400TextSm = "text-zinc-400 text-sm";
const textRed500FontSemibold = "text-red-500 font-semibold";

// Review component for individual book entries
function ReviewItem({ title, rating, description, time, price, imageUrl }) {
  return (
    <div className={containerClass}>
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
        <span className={textRed500FontSemibold}>{price}</span>
      </div>
    </div>
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
      price: "$4.00",
      imageUrl: "https://placehold.co/100x100"
    },
    {
      title: "Another Book",
      rating: "★★★★★",
      description: "Another dummy text for a different book review...",
      time: "Yesterday, 3:20 PM",
      price: "$6.00",
      imageUrl: "https://placehold.co/100x100"
    },
    {
        title: "Book Title",
        rating: "★★★★☆",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        time: "Today, 6:40 PM",
        price: "$4.00",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        title: "Another Book",
        rating: "★★★★★",
        description: "Another dummy text for a different book review...",
        time: "Yesterday, 3:20 PM",
        price: "$6.00",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        title: "Book Title",
        rating: "★★★★☆",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        time: "Today, 6:40 PM",
        price: "$4.00",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        title: "Another Book",
        rating: "★★★★★",
        description: "Another dummy text for a different book review...",
        time: "Yesterday, 3:20 PM",
        price: "$6.00",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        title: "Book Title",
        rating: "★★★★☆",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        time: "Today, 6:40 PM",
        price: "$4.00",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        title: "Another Book",
        rating: "★★★★★",
        description: "Another dummy text for a different book review...",
        time: "Yesterday, 3:20 PM",
        price: "$6.00",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        title: "Book Title",
        rating: "★★★★☆",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        time: "Today, 6:40 PM",
        price: "$4.00",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        title: "Another Book",
        rating: "★★★★★",
        description: "Another dummy text for a different book review...",
        time: "Yesterday, 3:20 PM",
        price: "$6.00",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        title: "Book Title",
        rating: "★★★★☆",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        time: "Today, 6:40 PM",
        price: "$4.00",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        title: "Another Book",
        rating: "★★★★★",
        description: "Another dummy text for a different book review...",
        time: "Yesterday, 3:20 PM",
        price: "$6.00",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        title: "Book Title",
        rating: "★★★★☆",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        time: "Today, 6:40 PM",
        price: "$4.00",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        title: "Another Book",
        rating: "★★★★★",
        description: "Another dummy text for a different book review...",
        time: "Yesterday, 3:20 PM",
        price: "$6.00",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        title: "Book Title",
        rating: "★★★★☆",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        time: "Today, 6:40 PM",
        price: "$4.00",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        title: "Another Book",
        rating: "★★★★★",
        description: "Another dummy text for a different book review...",
        time: "Yesterday, 3:20 PM",
        price: "$6.00",
        imageUrl: "https://placehold.co/100x100"
      },
    // Add more reviews here
  ];

  return (
    <div className="bg-black min-h-screen p-4 w-full">
        <div>
        <spam className='text-white font-bold text-9xl '>
                      Reviews 🤔
                    </spam>
                    <p className="text-zinc-400 mt-14">Intresting Bak Bak i should take a part</p>    
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
