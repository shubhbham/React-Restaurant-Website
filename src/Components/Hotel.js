import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";
import dining from "../assets/dining.jpg";
import kitchen from "../assets/kitchen.jpg";
import waiter from "../assets/waiter.jpg";
import { useEffect, useRef } from "react";


const Hotel = () => {

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
        fontFamily: "Kaushan Script, cursive",
        fontFamily: "Lobster, cursive",
    }

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
            <span className="px-6 text-white"><NavLink to="/react">Home</NavLink></span>
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
  </div>
  
  
     {/* rolls */}

     <div className="card-container">
          <div className="card">
            <LazyLoadedImage className="card-image" src={dining} alt="diningtable" />

            <div className="card-content">
              <div className="card-title">Dining Area</div>
              <p className="card-text">
              Elegant dining space with cozy ambiance, adorned with warm lighting and tasteful decor.
              </p>
            </div>
          </div>

          {/* paneer */}

          <div className="card ">
            <LazyLoadedImage className="card-image" src={kitchen} alt="kitchen" />
            <div className="card-content">
              <div className="card-title">Kitchen Area</div>
              <p className="card-text">
              Modern kitchen with sleek appliances, ample storage, designed for cleanliness.
              </p>
            </div>
          </div>

          {/* chicken Manchurian*/}

          <div className="card">
            <LazyLoadedImage className="card-image" src={waiter} alt="waiter-service" />
            <div className="card-content">
              <div className="card-title">Good Service</div>
              <p className="card-text">
              Attentive waiter anticipates needs, delivers orders promptly, and maintains a friendly demeanor.
              </p>
            </div>
          </div>

          {/* Div for card components end */}
        </div>
  
  
  
  
  
    <div>
      <div className="mt-10 text-center mb-7 bg-slate-800 p-3 m-4 rounded-lg font-bold">
          <span className="text-yellow-300">Resto</span>
          <span className="text-white">Kitchen</span>
          <span className="text-white"> | 2023</span>
          <h1 className="mt-4 text-white font-thin" style={variable}>
            Thanks for Visiting
          </h1>
        </div>
    </div>
    
    
    </>
  )
}

export default Hotel
