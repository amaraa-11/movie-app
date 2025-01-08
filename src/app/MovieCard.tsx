import Link from "next/link";

export type MovieCardProps = {
  title: string;

  image: string;

  rating: number;

  id: number;
};

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  image,
  rating,

  id,
}) => {
  return (
    <Link href={`/movie/${id}`}>
      <div className="rounded-lg shadow-lg overflow-hidden ">
        <img src={image} className="w-full h-auto object-cover" />

        <div className="p-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="flex items-center mt-2">
            <p className="ml-2 ">⭐️{rating}/10</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
