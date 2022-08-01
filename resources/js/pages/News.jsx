import React, { useState } from "react";
import { Link } from "react-router-dom";
import { news } from "../components/Data";
import { FiArrowRight } from "react-icons/fi";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const News = () => {
  const [hovered, setHovered] = useState(0);
  return (
    <>
      <section className="wrapper sm:pt-52 pt-32 py-32">
        <div className="uppercase mb-16 sm:text-5xl text-3xl">Whats new?</div>
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="lg:max-w-3xl mb-10 lg:mb-0">
            {news.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  onMouseEnter={() => setHovered(index)}
                  className=" w-full group "
                  key={index}
                >
                  <div
                    className={`border-b border-white py-1 mb-2 transition-all  flex justify-between items-center  ${
                      hovered === index && "text-custom-pink-500"
                    }`}
                  >
                    <div className="regular uppercase">
                      {item.title}{" "}
                      <span className="regular pl-10 text-white opacity-50">
                        {item.date}
                      </span>
                    </div>{" "}
                    <FiArrowRight className="inline-block h-5 w-5" />
                  </div>
                  <p className="opacity-50 text-justify regular mb-7">
                    {item.text}
                  </p>
                </Link>
              );
            })}
          </div>
          <MouseParallaxContainer
            enableCSSTransition
            useWindowMouseEvents
            className="  h-full lg:w-1/2"
          >
            {news.map((img, index) => {
              return (
                <MouseParallaxChild
                  factorX={-0.05}
                  factorY={-0.05}
                  className={`${hovered === index ? "block" : "hidden"}`}
                  key={index}
                >
                  <img
                    data-aos="zoom-in"
                    src={img.img}
                    alt=""
                    className="align-middle m-auto "
                    style={{ maxWidth: "80%" }}
                  />
                </MouseParallaxChild>
              );
            })}
          </MouseParallaxContainer>
        </div>
        <div className="wrapper flex items-center justify-center pt-20">
          <button className="text-custom-pink-500 mx-3 p-2 text-3xl">1</button>
          <button className=" mx-5 text-3xl">2</button>
          <button className=" mx-5 text-3xl">3</button>
        </div>
      </section>
    </>
  );
};

export default News;
