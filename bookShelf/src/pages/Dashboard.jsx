import React from 'react';

// Shared TailwindCSS classes
const textZinc900DarkZinc100 = "text-zinc-900 dark:text-zinc-100";
const bgWhiteDarkZinc800 = "bg-white dark:bg-zinc-800";
const textZinc600DarkZinc400 = "text-zinc-600 dark:text-zinc-400";

// Book Card Component
function BookCard({ title, author, imageUrl, altText }) {
  return (
    <div className={bgWhiteDarkZinc800 + " rounded-lg shadow p-4"}>
      <img src={imageUrl} alt={altText} className="w-full h-auto mb-4 rounded" />
      <h3 className={"text-lg font-semibold " + textZinc900DarkZinc100}>{title}</h3>
      <p className={textZinc600DarkZinc400}>{author}</p>
    </div>
  );
}

// Category Button Component
function CategoryButton({ label }) {
  return (
    <button className={"bg-zinc-200 dark:bg-zinc-700 " + textZinc900DarkZinc100 + " px-4 py-2 rounded-full"}>
      {label}
    </button>
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

// Main Component
function Dashboard() {
  return (
    <div className="min-h-screen bg-black p-4">
        <div className='w-full flex flex-col'>
            <div>
                    <spam className='text-white font-bold text-9xl'>
                      Home 😒
                    </spam>
            </div>

        </div>
      <div className="max-w-7xl mx-auto">
        <Section title="Recommended">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <BookCard title="The Psychology of Money" author="Morgan Housel" imageUrl="https://placehold.co/150x200" altText="The Psychology of Money" />
            <BookCard title="How Innovation Works" author="Matt Ridley" imageUrl="https://placehold.co/150x200" altText="How Innovation Works" />
            <BookCard title="Company of One" author="Paul Jarvis" imageUrl="https://placehold.co/150x200" altText="Company of One" />
            <BookCard title="Stupore E Tremori" author="Amelie Nothomb" imageUrl="https://placehold.co/150x200" altText="Stupore E Tremori" />
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
            <CategoryButton label="Geography" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <BookCard title="The Bees" author="Laline Paull" imageUrl="https://placehold.co/150x200" altText="The Bees" />
            <BookCard title="Real Help" author="Ayodeji Awosika" imageUrl="https://placehold.co/150x200" altText="Real Help" />
            <BookCard title="The Fact of a Body" author="Alexandria Marzano-Lesnevich" imageUrl="https://placehold.co/150x200" altText="The Fact of a Body" />
            <BookCard title="The Room" author="Jonas Karlsson" imageUrl="https://placehold.co/150x200" altText="The Room" />
          </div>
        </Section>
      </div>
    </div>
  );
}

export default Dashboard;
