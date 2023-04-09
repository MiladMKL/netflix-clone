import MovieThumbnail from "./MovieThumbnail";

const MovieLibrary = ({ results, title }) => {
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-14 mx-auto">
      <h2 className="font-light text-xl">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll no-scrollbar p-2 -m-2">
        {results.map((result) => (
          <MovieThumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default MovieLibrary;
