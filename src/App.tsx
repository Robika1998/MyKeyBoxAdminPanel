import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import LayOut from "./LayOut";
import Login from "./pages/Login/Login";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/home" />
          ) : (
            <Login onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/home"
        element={
          isAuthenticated ? (
            <LayOut>
              <Home />
            </LayOut>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/about"
        element={
          isAuthenticated ? (
            <LayOut>
              <div>About</div>
            </LayOut>
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default App;
