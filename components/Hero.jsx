import Head from "next/head";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative">
      <Head>
        <title>Log in | Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-[calc(100vh-72px)]">
        <Image src="/images/home-bg.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute flex flex-col space-y-6 top-1/3 w-full justify-center items-center mx-auto p-2 -mt-16 text-center">
          <span className="text-3xl md:text-5xl font-bold">
            Unlimited movies, TV shows, and more.
          </span>
          <span className="text-xl md:text-2xl">
            Watch anywhere. Cancel anytime.
          </span>
          <span className="text-lg md:text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <button className="bg-[#e50914] uppercase text-xl tracking-wide font-extrabold py-4 px-6 rounded hover:bg-[#b40710]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
