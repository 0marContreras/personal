"use client"
// pages/index.js

import Carousel from '@/components/carousel';

const images = [
  '/a3.jpg',
  '/a2.jpg',
  '/a1.jpg',
  '/a4.jpg',
  '/a5.jpg'
];

const Home = () => {
  return (
    <div className="bg-slate-800 flex items-center justify-center min-h-screen bg-gray-100">
      <Carousel images={images} />
    </div>
  );
};

export default Home;
