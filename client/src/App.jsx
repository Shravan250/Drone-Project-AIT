// import React, { useState } from "react";
// import Signup from "./components-1/Signup";
// import Signin from "./components-1/Signin";
// import Profile from "./components-1/Profile";

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
import { RouterProvider } from "react-router-dom";

// project import
import router from "routes";
import ThemeCustomization from "themes";

import ScrollTop from "components/ScrollTop";

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  );
}
