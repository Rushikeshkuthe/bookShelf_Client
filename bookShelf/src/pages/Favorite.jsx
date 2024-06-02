import React from 'react';

// Constants for repeated class strings
const cardBaseStyle = "bg-gradient-to-r from-slate-700 to-slate-500 p-4 rounded-lg";
const buttonBaseStyle = "p-2 rounded-lg";
const heartIcon = (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

// Data for the cards
const profiles = [
  {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  },
  {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  }, {
    name: "Warren Buffett",
    description: "Born in Nebraska in 1930, Warren Buffett demonstrated keen business abilities at a young age. He formed Buffett Partnership.",
    imageUrl: "https://placehold.co/60x60",
    alt: "Warren Buffett"
  },
  {
    name: "True experiment",
    description: "Born and raised in a Hindu merchant caste family in coastal Gujarat, India, and trained as a lawyer at the Inner Temple, London, Gandhi first.",
    imageUrl: "https://placehold.co/60x60",
    alt: "True experiment"
  },
  // Add other profiles similarly...
];

// Card component
function ProfileCard({ profile }) {
  return (
    
    <div className={cardBaseStyle}>
        
      <div className="flex items-center">
        <img src={profile.imageUrl} alt={profile.alt} className="rounded-full mr-4" />
        <div>
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="text-sm">{profile.description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className={`${buttonBaseStyle} bg-red-500 text-white`}>Delete</button>
        <button className={`${buttonBaseStyle} bg-white text-black`}>Read More</button>
        {heartIcon}
      </div>
    </div>
  );
}

// Favorites component
function Favorites() {
  return (
    <div className="bg-black text-white min-h-screen p-4">
           <div className="flex items-center space-x-4 mb-6">
        <div>
        <span className='text-white font-bold text-9xl'>
            Favorite 😍👧🏼
          </span>
          <p className="text-zinc-400">Choose for your fav one (32 Books)</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map(profile => (
          <ProfileCard key={profile.name} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
