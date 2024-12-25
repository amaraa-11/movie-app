"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper-bundle.min.css"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
 

const HeroSection = () => {
  const topRatedMovies = [
    { title: "Movie 1", imageUrl: "https://via.placeholder.com/200", rating: 8.5 },
    { title: "Movie 2", imageUrl: "https://via.placeholder.com/200", rating: 9.1 },
    { title: "Movie 3", imageUrl: "https://via.placeholder.com/200", rating: 7.8 },
    { title: "Movie 4", imageUrl: "https://via.placeholder.com/200", rating: 8.0 },
  ];

  return (
    <div className="relative w-full h-96">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
        <h1 className="text-white text-4xl font-bold">Top Rated Movies</h1>
        <Swiper
          spaceBetween={20} 
          slidesPerView={3} 
          loop={true} 
          autoplay={{ delay: 2500, disableOnInteraction: false }} 
        >
          {topRatedMovies.map((movie, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <img src={movie.imageUrl} alt={movie.title} className="w-40 h-60 object-cover rounded-md" />
              <h3 className="text-white mt-2">{movie.title}</h3>
              <p className="text-yellow-400">Rating: {movie.rating}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="bg-yellow-400 text-black px-4 py-2 mt-4 rounded-lg hover:bg-yellow-600 transition">
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
