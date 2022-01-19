import Link from 'next/link';
import React from 'react';

const HomeCollection = () => {
  return (
    <div className="flex relative">
      <div>
        <h1 className="text-black text-lg">IGNEUS</h1>
        <h1 className="text-black text-lg">/IVANPEDRETTI.ETH</h1>

        <p>
          Explore the patterns and colors brought to you from the center of the
          Earth through the force of volcanic eruptions.
        </p>
      </div>

      <Link href='/zeha/ignus' passHref>
      <button className="bg-black rounded-lg text-white py-2 px-4 right-0 top-0 absolute">
        Explore
      </button>
      </Link>
    </div>
  );
}

export default HomeCollection
