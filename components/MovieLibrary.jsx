import React, { useRef, useState, useEffect } from "react";
import MovieThumbnail from "./MovieThumbnail";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const MovieLibrary = ({ results, title }) => {
  const scrollContainerRef = useRef(null);
  const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
  const [scrollRightVisible, setScrollRightVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      if (!scrollContainer) return;
      setScrollLeftVisible(scrollContainer.scrollLeft > 0);
      setScrollRightVisible(
        scrollContainer.scrollLeft + scrollContainer.clientWidth <
          scrollContainer.scrollWidth
      );
    };

    handleScroll(); // Initial check

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex flex-col space-y-2 my-10 px-14 mx-auto">
      <h2 className="font-light text-xl">{title}</h2>
      <div className="relative">
        {scrollLeftVisible && (
          <button
            onClick={() => scroll(-500)}
            className="bg-[#e50914] hover:bg-[#b40710] text-white p-3 rounded-full absolute z-10 top-1/2 left-0 transform -translate-y-1/2"
          >
            <HiArrowLeft size={20} />
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-y-hidden overflow-x-scroll no-scrollbar p-2 -m-2"
        >
          {results.map((result) => (
            <MovieThumbnail key={result.id} result={result} />
          ))}
        </div>
        {scrollRightVisible && (
          <button
            onClick={() => scroll(500)}
            className="bg-[#e50914] hover:bg-[#b40710] text-white p-3 rounded-full absolute z-10 top-1/2 right-0 transform -translate-y-1/2"
          >
            <HiArrowRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieLibrary;
