import { Container } from "@mui/material";
import React from "react";
import CardGrid from "../pages/CardGrid";
import { Fade } from "@mui/material";

const ExploreContent = () => {
  return (
    <Fade in timeout={1000}>
      <div className="h-full w-[90%] flex flex-col justify-center items-center">
        <Container className="m-3 mt-5 flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-blue-700 bg-clip-text text-transparent">
            Welcome to explore section!
          </h1>

          <div>
            <CardGrid />
          </div>
        </Container>
      </div>
    </Fade>
  );
};

export default ExploreContent;
