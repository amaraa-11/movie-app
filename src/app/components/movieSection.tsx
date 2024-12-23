type Movie = {
  title: string;
  image: string;
  rating?: number;
};

type Props = {
  title: string;
  movies: Movie[];
};

const MovieSection: React.FC<Props> = ({ title, movies }) => {
  return (
    <section className="my-10 px-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded overflow-hidden shadow-md"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-2">
              <h3 className="text-sm font-bold">{movie.title}</h3>
              {movie.rating && (
                <p className="text-yellow-400 text-xs">⭐ {movie.rating}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
