   import { Movie } from "./constants/types"
import { Star } from "lucide-react";
import Link from "next/link";
 
export const MovieCard = ({ movie } : {movie: Movie})=> {
    const imgPath = movie?.poster_path ?? movie?.backdrop_path;
    const src = imgPath
    ? `https://image.tmdb.org/t/p/w500/${imgPath}`
    : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtIiwbQLKvRRQn_06612_CSC84SsKQTbvoQ&s`;
    return(
  
       <Link href={`/movie/${movie.id}`}>
        <div className="rounded-lg bg-gray-100">
            <img src={src} className="rounded-t-lg"/>
            <div className="p-2 dark:bg-black dark:text-white">
                <div className="flex items-center gap-1">
                    <Star size={16} className="stroke-yellow-300 fill-yellow-300 dark:stroke-orange-600" />
                    <p>{movie.vote_average.toFixed(1)}/10</p>
                     </div>
                     <p className="text-lg">{movie.title}</p>
            </div>
        </div>
       </Link>
    )
}