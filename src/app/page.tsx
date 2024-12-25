"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./Header";
import MovieCard, { MovieCardProps } from "./MovieCard";
import Footer from "./Footer";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const API_KEY = "f39690f9830ce804b7894ac1def4f7e9";


const fetchTopRatedMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results.map((movie: any) => ({
    title: movie.title,
    rating: movie.vote_average,
    date: movie.release_date,
    image: movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : "/placeholder.jpg", 
  }));
};

const fetchMoviesByQuery = async (query: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results.map((movie: any) => ({
    title: movie.title,
    rating: movie.vote_average,
    date: movie.release_date,
    image: movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : "/placeholder.jpg",
  }));
};

export default function Home() {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  
  useEffect(() => {
    const fetchInitialMovies = async () => {
      const topRatedMovies = await fetchTopRatedMovies();
      setMovies(topRatedMovies);
    };
    fetchInitialMovies();
  }, []);

  const handleSearch = async (query: string) => {
    if (query.trim()) {
      const searchResults = await fetchMoviesByQuery(query);
      setMovies(searchResults);
      setIsSearchActive(true); 
    } else {
     
      const topRatedMovies = await fetchTopRatedMovies();
      setMovies(topRatedMovies);
      setIsSearchActive(false); 
    }
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <HeroSection />
      <main className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">
          {isSearchActive ? "Search Results" : "Top Rated Movies"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie, id) => (
            <MovieCard
              key={id}
              title={movie.title}
              image={movie.image}
              rating={movie.rating}
              date={movie.date}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
