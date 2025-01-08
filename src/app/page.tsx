<<<<<<< HEAD
import { Section } from "./components/Section";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
export default function Home() {
  return(
    <div className="text">
      <Header />
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Top rated" endpoint="top_rated" />

   
    
    <Footer/>
=======
"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./Header";
import MovieCard, { MovieCardProps } from "./MovieCard";
import Footer from "./Footer";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const API_KEY = "f39690f9830ce804b7894ac1def4f7e9";

const fetchUpcomingMovies = async (page: number = 1) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=${page}`
  );
  const data = await res.json();
  return data.results.map((movie: any) => ({
    title: movie.title,
    rating: movie.vote_average,

    image: movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : "/placeholder.jpg",
  }));
};

const fetchTopRatedMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results.map((movie: any) => ({
    title: movie.title,
    rating: movie.vote_average,

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
    id: movie.id,
    rating: movie.vote_average,
    title: movie.title,

    image: movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : "/placeholder.jpg",
  }));
};

export default function Home() {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<MovieCardProps[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchInitialData = async () => {
      const topRatedMovies = await fetchTopRatedMovies();
      const initialUpcomingMovies = await fetchUpcomingMovies();
      setMovies(topRatedMovies);
      setUpcomingMovies(initialUpcomingMovies);
    };
    fetchInitialData();
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

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const newMovies = await fetchUpcomingMovies(nextPage);
    setUpcomingMovies((prevMovies) => [...prevMovies, ...newMovies]);
    setPage(nextPage);
  };
  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <HeroSection />
      <main className="max-w-7xl mx-auto p-4">
        <section>
          <h2 className="text-2xl font-bold mb-4">
            {isSearchActive ? "Search Results" : "Top Rated Movies"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {movies.map((movie, index) => (
              <MovieCard
                key={movie.id || index}
                title={movie.title}
                image={movie.image}
                rating={movie.rating}
                id={movie.id}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">Upcoming Movies</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {upcomingMovies.map((movie, index) => (
              <MovieCard
                key={movie.id || index}
                title={movie.title}
                image={movie.image}
                rating={movie.rating}
                id={movie.id}
              />
            ))}
          </div>
          <button
            onClick={handleLoadMore}
            className="bg-black text-white py-2 px-4 rounded mt-4 hover:bg-gray-500 transition"
          >
            See more
          </button>
        </section>
      </main>
      <Footer />
>>>>>>> 1024d05b450abc879833b9006e55c128e324b9e8
    </div>
  )
}