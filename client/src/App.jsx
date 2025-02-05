import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayoutPattern from "./pages/DashboardLayoutPattern";
import SignInPage from "./pages/SignInPage";
import ProtectedRoute from "./components/ProtectedRoute";

import ExploreContent from "./components/ExploreContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/explore" element={<ExploreContent />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayoutPattern />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
