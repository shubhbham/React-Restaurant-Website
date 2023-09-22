import React, { useState } from "react";
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";
import rolls from "../assets/rolls.jpg";
import paneer from "../assets/paneer.jpg";
import chickenred from "../assets/chickenred.jpg";
import frenchfries from "../assets/frenchfries.jpg";
import noodles from "../assets/noodles.jpg";
import chickenlegs from "../assets/chickenlegs.jpg";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function LazyLoadedImage({ src, alt }) {
    const imgRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              imgRef.current.src = src;
              observer.unobserve(imgRef.current);
            }
          });
        }
        // { rootMargin: "0px 0px 100px 0px" } // Adjust rootMargin as needed
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }, [src]);

    return <img style={{width: '100%', height: '210px'}}  ref={imgRef} alt={alt}  />;
  }

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    const body = document.body;
    body.classList.toggle("black-screen");
  }

  const variable = {
    // fontFamily: 'Artifika, serif',
    // fontFamily: 'Dancing Script, cursive',
    fontFamily: "Kaushan Script, cursive",
    fontFamily: "Lobster, cursive",
    // fontFamily: 'Montserrat, sans-serif',
    // fontFamily: 'PT Sans Narrow, sans-serif',
    // fontFamily: 'Rubik Iso, cursive',
  };

  return (
    <>
      <div className={`select-none ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="flex space-x-6 m-4 bg-sky-500 p-3 rounded-lg justify-between ">
          <h1
            className={`text-lg font-bold ${
              isDarkMode ? "dark-mode" : "light-mode"
            }`}
          >
            <span className="text-yellow-300">Resto</span>
            <span className="text-white">Kitchen</span>
            <span className="px-6 font-medium text-white">
              <NavLink to="/form">Reservation</NavLink>
            </span>
          </h1>
          <button className="" onClick={() => toggleDarkMode()}>
            {/* {`${isDarkMode ? "Light" : "Dark"}`} */}

            {isDarkMode ? (
              <>
                <img className="h-6 w-6 " src={light} />
              </>
            ) : (
              <>
                <img className="h-6 w-6" src={dark} />
              </>
            )}
          </button>
        </div>

        <div>
          <div className="m-4 text-white mt-6  space-x-4">
            <NavLink
              className="bg-sky-500 p-1 rounded-md hover:bg-blue-600 "
              style={variable}
              to="/hotel"
            >
              Hotel Ambience
            </NavLink>
            <NavLink
              className="bg-sky-500 p-1 rounded-md hover:bg-blue-600 "
              style={variable}
              to="/maps"
            >
              Location
            </NavLink>
            
            
          </div>
          <div className="m-6 mt-10 text-4xl font-bold text-slate-400">
            <h1 style={variable}>
              A Taste of Tradition, A Touch of Innovation.
            </h1>
          </div>

          <div className="m-6 mt-8 font-medium text-lg text-slate-300 ">
            <span>Feeding Your Senses, One Dish at a Time </span>
            <span> , Where Every Dish Tells a Delicious Story.</span>
          </div>
        </div>

        <div
          className="m-6 text-indigo-400 font-bold text-2xl mt-12 "
          style={variable}
        >
          <h1>Todays Special Menu</h1>
        </div>

        {/* rolls */}

        <div className="card-container">
          <div className="card">
            <LazyLoadedImage className="card-image" src={rolls} alt="Rolls" />

            <div className="card-content">
              <div className="card-title">
                Vegetable Rolls<span className="text-red-400 s"> Rs:150</span>
              </div>
              <p className="card-text">
                Crispy rolls filled with vegetables and served with sweet and
                sour sauce.
              </p>
            </div>
          </div>

          {/* paneer */}

          <div className="card ">
           <LazyLoadedImage className="card-image" src={paneer} alt="paneer" />
            <div className="card-content">
              <div className="card-title">
                Paneer Tikka<span className="text-red-400 s"> Rs:180</span>
              </div>
              <p className="card-text">
                Cubes of cottage cheese marinated in spices and grilled to
                perfection.
              </p>
            </div>
          </div>

          {/* chicken Manchurian*/}

          <div className="card">
           <LazyLoadedImage  className="card-image" src={chickenred} alt="ChickenManchurian" />
            <div className="card-content">
              <div className="card-title">
                Chicken Manchurian
                <span className="text-red-400 s"> Rs:250</span>
              </div>
              <p className="card-text">
                Deep-fried chicken balls tossed in a flavorful Manchurian sauce.
              </p>
            </div>
          </div>

          {/* Div for card components end */}
        </div>

        {/* frenchfries */}

        <div className="card-container">
          <div className="card">
            <LazyLoadedImage className="card-image" src={frenchfries} alt="FrenchFries" />

            <div className="card-content">
              <div className="card-title">
                Frenchfries<span className="text-red-400 s"> Rs:110</span>
              </div>
              <p className="card-text">
                Crispy French fries tossed in spicy, tangy Manchurian sauce,
                fusion.
              </p>
            </div>
          </div>

          {/* noodles */}

          <div className="card ">
            <LazyLoadedImage className="card-image" src={noodles} />
            <div className="card-content">
              <div className="card-title">
                Noodles<span className="text-red-400 s"> Rs:120</span>
              </div>
              <p className="card-text">
                Long, thin pasta strands, typically made from wheat, rice, or
                other grains
              </p>
            </div>
          </div>

          {/* chickenlegs*/}

          <div className="card">
            <LazyLoadedImage  className="card-image" src={chickenlegs} alt="chickenlegs" />
            <div className="card-content">
              <div className="card-title">
                ChickenLegs<span className="text-red-400 s"> Rs:280</span>
              </div>
              <p className="card-text">
                drumstick and thigh portions, dark meat, juicy, flavorful,
                chicken
              </p>
            </div>
          </div>

          {/* Div for card components end */}
        </div>

        <div className="mt-10 text-center mb-7 bg-slate-800 p-3 m-4 rounded-lg font-bold">
          <span className="text-yellow-300">Resto</span>
          <span className="text-white">Kitchen</span>
          <span className="text-white"> | 2023</span>
          <h1 className="mt-4 text-white font-thin" style={variable}>
            Thanks for Visiting
          </h1>
        </div>

        {/* Div for dark mode end */}
      </div>
    </>
  );
};

export default App;
