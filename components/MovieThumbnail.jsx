import Image from "next/image";
import { useRouter } from "next/router";

function MovieThumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const router = useRouter();

  return (
    <div
      className="flex min-w-[250px] min-h-[180px] max-h-[150px] md:min-w-[350px] md:min-h-[240px] overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transform hover:scale-105 transition duration-300"
      onClick={() => router.push(`/movie/${result.id}`)}
    >
      <div className="flex flex-col">
        <Image
          src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
          width={350}
          height={200}
          style={{ objectFit: "cover" }}
          alt="thumbnail"
        />
        <div className="text-center py-2">
          <span className="text-sm text-white">{result.title}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieThumbnail;
