import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import { Button, Input } from 'antd';


// Shared TailwindCSS classes
const textZinc900DarkZinc100 = "text-zinc-900 dark:text-zinc-100";
const bgWhiteDarkZinc800 = "bg-white dark:bg-zinc-800";
const textZinc600DarkZinc400 = "text-zinc-600 dark:text-zinc-400";



// Book Card Component
function BookCard({ title, author, imageUrl, altText,rating }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={bgWhiteDarkZinc800 + " rounded-lg shadow p-4"}
    >
      <img src={imageUrl} alt={altText} className="w-full h-auto mb-4 rounded" />
      <h3 className={"text-lg font-semibold " + textZinc900DarkZinc100}>{title}</h3>
      <p className={textZinc600DarkZinc400}>{author}</p>
      <span className="text-yellow-500">{rating}</span>
      <div className='flex items-center justify-start'>
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='mt-2 w-60'
            >
                <Button
            className="text-base font-bold"
          >
            View
          </Button>
            </motion.div>
        </div>
    </motion.div>
  );
}

// Category Button Component
function CategoryButton({ label }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={"bg-zinc-200 dark:bg-zinc-700 " + textZinc900DarkZinc100 + " px-4 py-2 rounded-full"}
    >
      {label}
    </motion.button>
  );
}

// Section Component
function Section({ title, children }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className={"text-xl font-bold " + textZinc900DarkZinc100}>{title}</h2>
        {title === "Recommended" && <a href="#" className="text-blue-500 dark:text-blue-400">See All &rarr;</a>}
      </div>
      {children}
    </div>
  );
}

function Banner() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://source.unsplash.com/featured/?book",
    "https://source.unsplash.com/featured/?reading",
    "https://source.unsplash.com/featured/?library",
    "https://source.unsplash.com/featured/?knowledge",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center h-52 bg-emerald-500 text-white rounded-lg mb-8 overflow-auto"
    >
      <img
        src={images[currentImage]}
        alt="Banner Image"
        className="w-full h-full object-cover rounded-lg"
      />
     
    </motion.div>
  );
}


// Main Component
function Dashboard() {
  return (
    <div className="min-h-screen bg-black p-4  ">
      <div className='w-full flex items-center justify-between'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className='text-white font-bold text-6xl'>
            Home 🙂
          </span>
          
        </motion.div>
        <div className=' w-1/3'>
          <Input.Search
            placeholder="Search books"
            className="w-full"
            enterButton
          />
        </div>
      </div>
      <div className='mt-5'>
      <Banner />
      </div>
     
      <div className="max-w-7xl mx-auto">
        <Section title="Recommended">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <BookCard title="The Psychology of Money" author="Morgan Housel" imageUrl="https://placehold.co/150x200" altText="The Psychology of Money" rating="★★★★☆"/>
            <BookCard title="How Innovation Works" author="Matt Ridley" imageUrl="https://placehold.co/150x200" altText="How Innovation Works" rating="★★★★☆"/>
            <BookCard title="Company of One" author="Paul Jarvis" imageUrl="https://placehold.co/150x200" altText="Company of One" rating="★★★★☆"/>
            <BookCard title="Stupore E Tremori" author="Amelie Nothomb" imageUrl="https://placehold.co/150x200" altText="Stupore E Tremori" rating="★★★★☆"/>
          </div>
        </Section>

        <Section title="Categories">
          <div className="flex flex-wrap gap-2 mb-4">
            <CategoryButton label="All" />
            <CategoryButton label="Sci-Fi" />
            <CategoryButton label="Fantasy" />
            <CategoryButton label="Drama" />
            <CategoryButton label="Business" />
            <CategoryButton label="Education" />
            <CategoryButton label="Manga" />
            <CategoryButton label="Philosophy" />
            <CategoryButton label="Geography" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <BookCard title="The Bees" author="Laline Paull" imageUrl="https://placehold.co/150x200" altText="The Bees"  rating= "★★★★☆" />
            <BookCard title="Real Help" author="Ayodeji Awosika" imageUrl="https://placehold.co/150x200" altText="Real Help" rating= "★★★★☆" />
            <BookCard title="The Fact of a Body" author="Alexandria Marzano-Lesnevich" imageUrl="https://placehold.co/150x200" altText="The Fact of a Body" rating= "★★★★☆" />
            <BookCard title="The Room" author="Jonas Karlsson" imageUrl="https://placehold.co/150x200" altText="The Room" rating= "★★★★☆" />
          </div>
        </Section>
        <Section title="Essentials">
          <div className="flex flex-wrap gap-2 mb-4">
            <CategoryButton label="Journal" />
            <CategoryButton label="Article" />
            <CategoryButton label="Audio" />
            <CategoryButton label="Podcast" />
            <CategoryButton label="Magazine" />
            <CategoryButton label="Research Paper" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <BookCard title="The Bees" author="Laline Paull" imageUrl="https://placehold.co/150x200" altText="The Bees" rating= "★★★★☆" />
            <BookCard title="Real Help" author="Ayodeji Awosika" imageUrl="https://placehold.co/150x200" altText="Real Help" rating= "★★★★☆" />
            <BookCard title="The Fact of a Body" author="Alexandria Marzano-Lesnevich" imageUrl="https://placehold.co/150x200" altText="The Fact of a Body" rating= "★★★★☆" />
            <BookCard title="The Room" author="Jonas Karlsson" imageUrl="https://placehold.co/150x200" altText="The Room" rating= "★★★★☆"  />
          </div>
        </Section>
      </div>
    </div>
  );
}

export default Dashboard;
