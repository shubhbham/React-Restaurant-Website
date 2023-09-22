import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";
import booking from "../assets/booking.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from 'react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xaygjzoa");

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
        },
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

    return <img ref={imgRef} alt={alt} className="h-20 px-4" />;
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

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    const body = document.body;
    body.classList.toggle("black-screen");
  }

  if (state.succeeded) {
    return (
      <div>
        {" "}
        <p className="text-center mt-28 font-extrabold text-2xl text-violet-400">
          Your Reservation was Successful!
        </p>
        <NavLink
          to="/react"
          className="flex justify-center items-center mt-10 font-bold text-xl text-violet-400"
        >
          Back to Home!
        </NavLink>
      </div>
    );
  }

  return (
    <>
      <div className="m-4 flex justify-end ">
        <button
          className="bg-green-500 text-white flex  font-bold p-2 rounded-md "
          onClick={() => toggleDarkMode()}
        >
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
        <span
          className={`bg-green-500 p-2 select-none rounded-md ml-5 font-bold ${
            isDarkMode ? "dark-mode" : "light-mode"
          }`}
        >
          <NavLink to="/react">HOME</NavLink>
        </span>
      </div>
      <div className="flex justify-center items-center font-bold text-violet-500 text-2xl">
        <LazyLoadedImage src={booking} />
        <span className="px-5" style={variable}>
          Reservation-Form
        </span>
      </div>
      <form className="mt-14" onSubmit={handleSubmit}>
        <div className="text-center"></div>

        <div className="flex justify-center items-center mt-10">
          <input
            className="bg-slate-300 sm:w-96 w-80 h-10 rounded-lg"
            id="email"
            type="email"
            name="email"
            placeholder=" Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="flex justify-center items-center mt-10">
          <input
            className="bg-slate-300 sm:w-96 w-80 h-10 rounded-lg"
            id="phone"
            type="phone"
            name="phone"
            placeholder=" Mobile-no"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        <div className="flex justify-center items-center mt-10">
          <input
            className="bg-slate-300 sm:w-96 w-80 h-10 rounded-lg"
            id="number"
            type="number"
            name="number"
            placeholder=" How many members are dining"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        <div className="flex justify-center items-center mt-10">
          <input
            className="bg-slate-300 sm:w-96 w-80 h-10 rounded-lg"
            id="text"
            type="text"
            name="text"
            placeholder=" Enter your name "
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="flex justify-center items-center mt-10">
          <textarea
            className="bg-slate-300 sm:w-96 w-80 h-40 rounded-lg"
            id="message"
            name="message"
            placeholder=" Enter Your Message if any additional requirments."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="flex justify-center items-center mt-10 ">
          <button
            className="bg-green-500 text-center font-bold text-white p-3 rounded-2xl"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </form>

      <div className="mt-10 text-center mb-7 bg-slate-800 p-3 m-4 rounded-lg font-bold">
        <span className="text-yellow-300">Resto</span>
        <span className="text-white">Kitchen</span>
        <span className="text-white"> | 2023</span>
        <h1 className="mt-4 text-white font-thin" style={variable}>
          Thanks for Visiting
        </h1>
      </div>
    </>
  );
}
function Formlog() {
  return <ContactForm />;
}
export default Formlog;

// "homepage": "https://testiomanip.github.io/react",

// "predeploy": "npm run build",
//     "deploy": "gh-pages -d build",
