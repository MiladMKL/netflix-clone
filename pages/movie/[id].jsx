import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// Lazy loading for trailer
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Movie = ({ result }) => {
  const { data: session, status } = useSession();
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const router = useRouter();
  const [showPlayer, setShowPlayer] = useState(false);

  /* useEffect 
  ------------------------------------------------- */
  // useEffect(() => {
  //   if (!session) {
  //     router.push("/");
  //   }
  // }, []);

  // Find the Trailer
  const index = result.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );

  return (
    <div>
      <Head>
        <title>{result.title || result.original}</title>
      </Head>
      <Header />

      {/* {!session ? (
        <Hero />
      ) : ( */}
      <section className="relative z-50">
        <div className="relative min-h-[calc(100vh-72px)]">
          <Image
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            fill
            style={{ objectFit: "cover" }}
            alt="poster"
          />
        </div>
        <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {result.title || result.original_name}
          </h1>
          <div className="flex items-center space-x-3 md:space-x-5">
            <button
              className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-5 rounded hover:bg-[#909090]"
              onClick={() => setShowPlayer(true)}
            >
              <img
                src="/images/play-icon-black.svg"
                alt=""
                className="h-6 md:h-8"
              />
              <span className="uppercase font-semibold tracking-wide">
                Play Trailer
              </span>
            </button>

            <button className="text-xs md:text-base bg-gray-600/50 text-[#f9f9f9] flex items-center justify-center py-2.5 h-11 md:h-14 px-6 rounded hover:bg-[#909090]">
              <span className="uppercase font-semibold tracking-wide">
                More Info
              </span>
            </button>
          </div>

          <p className="text-xs md:text-sm">
            {result.release_date || result.first_air_date} •{" "}
            {Math.floor(result.runtime / 60)}h {result.runtime % 60}m •{" "}
            {result.genres.map((genre) => genre.name + " ")}{" "}
          </p>
          <h4 className="text-sm md:text-lg max-w-4xl">{result.overview}</h4>
        </div>

        {/* Bg Overlay */}
        {showPlayer && (
          <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
        )}

        <div
          className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
            showPlayer ? "opacity-100 z-50" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-4">
            <span className="font-normal text-lg">
              Trailer - {result.title}
            </span>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center"
              onClick={() => setShowPlayer(false)}
            >
              <AiOutlineClose className="text-white" size={30} />
            </div>
          </div>
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              controls={true}
              playing={showPlayer}
            />
          </div>
        </div>
      </section>
      {/* )} */}
    </div>
  );
};

export default Movie;

export async function getServerSideProps(context) {
  // const session = await getSession(context);
  const id = context.query.id;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((response) => response.json());

  return {
    props: {
      // session,
      result: request,
    },
  };
}
