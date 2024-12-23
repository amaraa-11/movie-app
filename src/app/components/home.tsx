"use client";
import Navbar from "./navbar";
import Hero from "./hero";
import MovieSection from "./movieSection";
import Footer from "../components/footer";

const Home = () => {
  const upcomingMovies = [
    { title: "Wicked", image: "/wicked.jpg", rating: 4.5 },
    { title: "Space Dogs", image: "/space-dogs.jpg", rating: 3.8 },
  ];

  const popularMovies = [
    { title: "The Godfather", image: "/godfather.jpg", rating: 5 },
    { title: "Pulp Fiction", image: "/pulp-fiction.jpg", rating: 4.9 },
  ];

  const topRatedMovies = [
    { title: "Shawshank Redemption", image: "/shawshank.jpg", rating: 5 },
    { title: "The Dark Knight", image: "/dark-knight.jpg", rating: 4.8 },
  ];
  return (
    <div>
      <Navbar />
      <Hero />
      <MovieSection title="Upcoming Movies" movies={upcomingMovies} />
      <MovieSection title="Popular Movies" movies={popularMovies} />
      <MovieSection title="Top Rated Movies" movies={topRatedMovies} />
      <Footer />
    </div>
  );
};

export default Home;
