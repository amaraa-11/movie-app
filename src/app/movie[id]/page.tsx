   import { Header } from "@/app/components/Header";
import { Options } from "../components/constants/types"
 
type Props={
    params: {
        id: string;
        
    }
}
 
export default async function Page ({ params }: Props) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}`,
  Options
    );
   const data = await response.json();
   const imgPath = data?.poster_path ?? data?.backdrop_path;
   const src = imgPath
   ? `https://image.tmdb.org/t/p/w154/${imgPath}`
   : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtIiwbQLKvRRQn_06612_CSC84SsKQTbvoQ&s`;
    return(
        <div>
          <Header />
            <p className="text-2xl font-bold">{data.title}</p>
            <p>{data.release_date}</p>
            <img src={src} />
            <p>{data.overview}</p>
            <p>{data.director}</p>
            
            </div>
    )
}