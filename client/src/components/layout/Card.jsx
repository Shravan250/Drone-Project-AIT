import { Container, Button } from "@mui/material";
import React from "react";

// import { Container, Button } from "your-component-library"; // Adjust the import according to your setup

const Card = ({ url, Heading, paraContent, link }) => {
  return (
    <Container className="flex flex-row mt-2 border rounded-lg p-4 shadow-lg bg-white">
      <img
        src="https://cdn.pixabay.com/photo/2025/02/02/01/20/grizzly-9375881_1280.jpg"
        alt="Grizzly Bear"
        className="w-1/3 h-full rounded-lg object-cover"
      />
      <div className="flex flex-col justify-center w-2/3 ml-4 items-center">
        <h5 className="font-bold tracking-tight text-gray-900 text-3xl">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <button className="mt-4 flex items-center border bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Read more
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </Container>
  );
};

export default Card;
