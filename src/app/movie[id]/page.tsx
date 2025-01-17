<<<<<<< HEAD
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
=======
type Props = {
  params: {
    id: string;
  };
};

const API_KEY = "f39690f9830ce804b7894ac1def4f7e9";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  method: "GET",

  headers: {
    accept: "application/json",

    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE`,
  },
};

export default async function MovieDetailsPage({ params }: Props) {
  const { id } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
    options
  );

  if (!res.ok) {
    return <div>Error fetching movie details</div>;
  }

  const movie = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${movie.poster_path}`
              : "/placeholder.jpg"
          }
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow"
        />
        <div>
          <p className="text-lg mb-2">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p className="text-lg mb-2">
            <strong>Rating:</strong> ⭐️ {movie.vote_average} / 10
          </p>
          <p className="text-lg mb-4">
            <strong>Overview:</strong> {movie.overview}
          </p>
          <div>
            <strong>Genres:</strong>{" "}
            {movie.genres && movie.genres.length > 0
              ? movie.genres.map((genre: any) => genre.name).join(", ")
              : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 1024d05b450abc879833b9006e55c128e324b9e8
