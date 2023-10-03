import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>

      <Navigation />
      <section
        id="home"
        className="grid grid-cols-6 m-10 items-center justify-center"
      >
        <div className="col-start-2 col-span-2 row-span-3 stroke-green-900 p-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85%"
            height="85%"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#14532D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2 21h15M21 21h1"
            ></path>
            <path
              stroke="#14532D"
              strokeWidth="1.5"
              d="M2 16.4V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"
            ></path>
          </svg>
        </div>
        <div className=" col-span-2 p-5 self-end">
          <h1 className="font-bold text-3xl">Powered and Personalized by AI</h1>
        </div>
        <div className="p-5 col-start-4 col-span-2">
          <p className="text-lg">
            Leveraging AI technology, LearnLink curates a personalized learning
            experience tailored to each student's individual needs.
          </p>
        </div>
        <div className="col-start-4 self-start p-5 mt-0">
          <button
            type="button"
            className="text-center bg-amber-500 hover:bg-amber-600 py-3 px-6 rounded-md"
          >
            More Info &rarr;{" "}
          </button>
        </div>
      </section>

      <section
        id="blog"
        className="grid grid-cols-3 m-10 gap-4 justify-items-center p-2"
      >
        <div className="h-80 w-full col-span-1 border-2 p-4">Blog Post 1</div>
        <div className="h-80 w-full col-span-1 border-2 p-4">Blog Post 2</div>
        <div className="h-80 w-full col-span-1 border-2 p-4">Blog Post 3</div>
        <div className="col-start-3 justify-self-end">
          <button
            type="button"
            className="text-center bg-amber-500 hover:bg-amber-600 py-3 px-6 rounded-md"
          >
            Read More &rarr;
          </button>

        </div>
      </section>

      <section
        id="reviews"
        className="grid grid-cols-5 gap-10 m-10 justify-items-center p-2"
      >
        <div className="h-48 min-w-full col-start-2 bg-emerald-100 rounded-lg p-4">
          Review 1
        </div>
        <div className="h-48 min-w-full col-start-3 bg-emerald-100 rounded-lg p-4">
          Review 2
        </div>
        <div className="h-48 min-w-full col-start-4 bg-emerald-100 rounded-lg p-4">
          Review 3
        </div>
        <div className="col-start-5 row-start-2 justify-self-end ">
          <button
            type="button"
            className="text-center bg-amber-500 hover:bg-amber-600 py-3 px-6 rounded-md"
          >
            Read More &rarr;
          </button>
        </div>
      </section>

      <section
        id="info"
        className="flex items-center justify-center m-20 mb-48"
      >
        <div className="p-10 pb-2 rounded-xl bg-teal-400">
          <h2 className="font-bold text-2xl mb-5">
            LearnLink is learning made just for you
          </h2>
          <p className="mb-3">Sign up today for personalized learning</p>
          <button
            type="button"
            className="text-center bg-amber-500 hover:bg-amber-600 py-3 px-6 rounded-md"
          >
            Find Out More
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
