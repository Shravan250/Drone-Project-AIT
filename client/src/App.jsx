import { useState } from "react";
import "./App.css";
import DashboardLayoutPattern from "./pages/DashboardLayoutPattern";
import SignInPage from "./pages/SignInPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <SignInPage />
      {/* <DashboardLayoutPattern /> */}
    </div>
  );
}

export default App;
