import Navbar from "./Navbar";

import HeroSection from "./Header";

import MovieCard,{MovieCardProps} from "./MovieCard";
import Footer from "./Footer";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";


export const API_KEY = "f39690f9830ce804b7894ac1def4f7e9";
export default async function Home() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };

  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );
  const data = await res.json();
  type Movie = {
  title: string;
  rating: number;
  image: string;
  date:number;
};

  
  const movies: MovieCardProps[] = data.results.map((movie:any ) => ({
 title: movie.title,
 rating: movie.vote_average,
 image: movie.poster_path, 
 date:movie.release_date,

}));
  console.log(data.results)

  return (
    <div>
      <Navbar />
      <HeroSection />
      <main className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Upcoming</h2>
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
