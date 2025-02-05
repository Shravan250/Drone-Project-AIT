import { Container } from "@mui/material";
import React from "react";
import CardGrid from "../pages/CardGrid";

const ExploreContent = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Container className="m-3 mt-5 flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-blue-700 bg-clip-text text-transparent">
          Welcome to explore section!
        </h1>

        <div>
          <CardGrid />
        </div>
      </Container>
    </div>
  );
};

export default ExploreContent;
