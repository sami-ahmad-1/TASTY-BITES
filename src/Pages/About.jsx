import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
      
      <Link to="/">
        <button className='w-20 h-11 bg-red-400 rounded-md'>Home</button>
      </Link>
    </div>
  );
};

export default About;
