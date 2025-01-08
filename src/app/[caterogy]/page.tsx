  "use client"
import { Options } from "../components/constants/types"
import { MovieCard } from "../components/MovieCard";
import { Movie } from "../components/constants/types";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
 
export default function Page() {
    const params = useParams();
    const searchParams = useSearchParams();
    const page = searchParams.get(`page`);
    const [movies, setMoives] = useState<Movie[]>([]);
    useEffect(() => {
        const fetchMovies = async() => {
            const response = await fetch (
                `https://api.themoviedb.org/3/movie/${params.category}?language=en-US&page=${page}`,
                Options
            );
            const resJson =await response.json();
            const data: Movie[] = resJson.results;
            setMoives(data);
        };
        fetchMovies();
    },[params]);
 
     return (
        <div>
            <h1 className="font-bold">{params.category}</h1>
            <div className="p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {movies?.map((movie) => (
                <MovieCard movie = {movie} />
            ))}
            </div>
            <Pagination />
        </div>
    )
}
 
 