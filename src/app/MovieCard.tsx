type MovieCardProps = {
  title: string;

  image: string;

  rating: number;
  date:number;

};

// export const API_KEY = "f39690f9830ce804b7894ac1def4f7e9";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
//   },
// };

// const res = await fetch(
//   "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
//   options
// );



const MovieCard: React.FC<MovieCardProps> = ({ title, image, rating ,date}) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex items-center mt-2">
          <p className="ml-2">⭐️{rating}/10 <br/>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
export type {MovieCardProps};