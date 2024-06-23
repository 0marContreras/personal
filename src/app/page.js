"use client"
// pages/index.js

import Carousel from '@/components/carousel';

const images = [
  '/a3.jpg',
  '/a2.jpg',
  '/a1.jpg',
  '/a4.jpg',
  '/a5.jpg',
  '/a6.jpg',
  '/a7.jpg',
  '/a8.jpg',
  '/a9.jpg',
  '/a10.jpg',
  '/a11.jpg',
  '/a12.jpg',
  '/a13.jpg',
  '/a14.jpg',
  '/a15.jpg',
  '/a16.jpg',
  '/a17.jpg',
  '/a18.jpg',
  '/a19.jpg',
  '/a20.jpg',
  '/a21.jpg'
];

const Home = () => {
  return (
    <div className="bg-slate-800 flex items-center justify-center min-h-screen bg-gray-100">
      <Carousel images={images} />
    </div>
  );
};

export default Home;
