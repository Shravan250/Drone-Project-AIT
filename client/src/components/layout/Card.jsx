import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function VideoMakerCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        maxWidth: 600,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#212121",
        color: "#fff",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "30%",
          height: isSmallScreen ? 200 : "auto",
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2025/02/02/01/20/grizzly-9375881_1280.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: isSmallScreen ? "8px 8px 0 0" : "8px 0 0 8px",
        }}
      />

      {/* Content */}
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 3,
          textAlign: "left",
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 1, color: "#fff" }}
        >
          All Video Maker by Descript
        </Typography>

        {/* Description */}
        <Typography variant="body2" sx={{ mb: 2, color: "#bbb" }}>
          Turn your ideas into videos with the AI Video Maker by Descript - a
          powerful text-to-speech video creation tool.
        </Typography>

        {/* Footer with "Read More" button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: isSmallScreen ? "center" : "flex-start",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#333",
              color: "#bbb",
              textTransform: "none",
              "&:hover": { backgroundColor: "#444" },
            }}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
