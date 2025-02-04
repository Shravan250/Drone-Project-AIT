// import React, { useState } from "react";
// import Signup from "./components-/Signup";
// import Signin from "./components-/Signin";
// import Profile from "./components-/Profile";

// const App = () => {
//   const [token, setToken] = useState(localStorage.getItem("token") || "");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold mb-8">Welcome to the App</h1>
//       {!token ? (
//         <div className="flex space-x-4">
//           <Signup setToken={setToken} />
//           <Signin setToken={setToken} />
//         </div>
//       ) : (
//         <div>
//           <Profile token={token} />
//           <button
//             onClick={handleLogout}
//             className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import { CssBaseline, GlobalStyles } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
  BarElement,
} from "chart.js";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
  BarElement
);

function App() {
  const globalStyles = {
    a: {
      color: "unset",
      textDecoration: "none",
    },
  };

  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
