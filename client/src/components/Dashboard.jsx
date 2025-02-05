import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  TextField,
  IconButton,
  Fade,
  useTheme,
} from "@mui/material";
import { Mic, Search, AttachFile } from "@mui/icons-material";

export default function Dashboard({ pathname, navigate }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showWelcomeText, setShowWelcomeText] = useState(true);
  const fileInputRef = useRef(null);
  const theme = useTheme();

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      setShowWelcomeText(false); // Hide the welcome text
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMessages([
        ...messages,
        { text: `Uploaded file: ${file.name}`, sender: "user" },
      ]);
    }
  };

  const handleAttachFileClick = () => {
    fileInputRef.current.click(); // Trigger the file input dialog
  };

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#fff",
        color: theme.palette.text.primary,
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "60%",
          padding: 2,
          borderRadius: 2,
          color: theme.palette.text.primary,
        }}
      >
        <Fade in={showWelcomeText} timeout={500}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            What can I help with?
          </Typography>
        </Fade>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            flex: 1,
            overflowY: "auto",
            pb: 2,
            marginTop: showWelcomeText ? 0 : "auto",
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                alignSelf:
                  message.sender === "user" ? "flex-end" : "flex-start",
                backgroundColor:
                  message.sender === "user"
                    ? theme.palette.mode === "dark"
                      ? "#333"
                      : "#e0e0e0"
                    : theme.palette.mode === "dark"
                      ? "#2A2A2A"
                      : "#f5f5f5",
                color: theme.palette.text.primary,
                borderRadius: 2,
                p: 1,
                mb: 2,
                maxWidth: "60%",
              }}
            >
              <Typography>{message.text}</Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor:
              theme.palette.mode === "dark" ? "#2A2A2A" : "#f5f5f5",
            borderRadius: 2,
            p: 1,
            width: "100%",
            mb: 2,
          }}
        >
          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />

          <IconButton onClick={handleAttachFileClick}>
            <AttachFile sx={{ color: theme.palette.text.secondary }} />
          </IconButton>
          <TextField
            variant="standard"
            placeholder="Message ChatGPT"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            InputProps={{
              disableUnderline: true,
              sx: { color: theme.palette.text.primary, flex: 1 },
            }}
            sx={{ flex: 1, ml: 1 }}
          />
          <IconButton>
            <Mic sx={{ color: theme.palette.text.secondary }} />
          </IconButton>
          <IconButton onClick={handleSendMessage}>
            <Search sx={{ color: theme.palette.text.secondary }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
