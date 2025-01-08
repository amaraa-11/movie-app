import { Movie } from "./constants/types";
import { Options } from "./constants/types";
import { MovieCard } from "./MovieCard";
import Link from "next/link";
 
type Props = {
    endpoint: string;
    title: string;
};
 
export const Section = async ({title, endpoint}: Props) => {
 
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
        Options
        
    )
    const resJson = await response.json();
    const movies: Movie[] = resJson.results?.slice(0,10);
    return(
        <div className="p-3">
            <div className="flex justify-between">
                <h1 className="font-semibold" > {title}</h1>
                <Link href={`/${endpoint}`}>
                <p className="hover:underline">see more</p></Link>
            </div>
            <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {movies?.map((movie)=> (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}