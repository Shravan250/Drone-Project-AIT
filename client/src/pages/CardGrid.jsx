import React from "react";
// Adjust the import according to your setup
import Card from "../components/layout/Card"; // Adjust the import according to your setup
import { Box } from "@mui/material";

const CardGrid = () => {
  return (
    <Box className="grid-cols-2 grid mx-5 gap-3 border p-2 mt-2">
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  );
};

export default CardGrid;
