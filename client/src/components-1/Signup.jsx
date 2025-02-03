import React, { useState } from "react";

const Signup = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const response = await fetch("http://localhost:6969/api/v1/user/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, email, password }),
  //     });
  //     const data = await response.json();
  //     if (data.success) {
  //       setToken(data.data.token);
  //       localStorage.setItem("token", data.data.token);
  //     } else {
  //       alert(data.message);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { username, email, password };
    console.log("Signup Payload:", payload); // Debugging

    const response = await fetch("http://localhost:6969/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("Signup Response:", data); // Debugging

    if (data.success) {
      setToken(data.data.token);
      localStorage.setItem("token", data.data.token);
    } else {
      alert(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
