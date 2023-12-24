import React from "react";
import bg2 from "../../../assets/bg-2.jpg";
import hero1 from "../../../assets/hero1.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className=" w-full">
      <div
        className="hero min-h-[100vh]"
        style={{
          backgroundImage: `url(${bg2})`,
        }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-6 px-5">
          <div className=" overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className=" flex flex-col text-left"
            >
              <h1 className="mb-5 text-4xl lg:text-7xl font-bold text-left text-slate-800">
                A pair of trousers and a t-shirt that you need
              </h1>
              <p className="mb-5 text-base lg:text-xl text-slate-800 text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                similique aperiam aspernatur reprehenderit natus omnis nostrum
                dolores. Eos cumque eaque repudiandae corpo
              </p>
              <div>
                <button className=" bg-black px-8 border-2 border-black hover:bg-white duration-500 hover:text-black py-2 rounded-sm font-medium text-lg text-white">
                  Shop now
                </button>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.img
              initial={{ x: "100%" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              src={hero1}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
