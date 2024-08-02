import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Background from "../components/Background";

const Home = () => {
  return (
    <div>
      <Background />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="alchemy.svg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-2xl mb-4 font-medium bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              VAPE DIY Kalkulačka
            </h1>
            <p className="mb-8 leading-relaxed">
              Aplikace je pro zaměřená na jednoduchost a intuitivní ovládání při míchání e-liquidu a motání spirálek.
            </p>



            <div className="flex justify-center">
              <div className="grid grid-cols-2 grid-rows-1 gap-4">
                <div>
                  <Link
                    to="/liquid"
                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Liquid
                  </Link>
                </div>
                <div>
                  <Link
                    to="/spiralky"
                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Spirálka
                  </Link>
                </div>
              </div>


              <div class="relative inline-flex group">
                <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
