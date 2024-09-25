import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import LayOut from "./LayOut";
import Login from "./pages/Login/Login";
import AddLocker from "./pages/Locker/AddLocker";
import LockerList from "./pages/Locker/LockerList";
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
        path="/locker/add"
        element={
          isAuthenticated ? (
            <LayOut>
              <AddLocker />
            </LayOut>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/locker/list"
        element={
          isAuthenticated ? (
            <LayOut>
              <LockerList />
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
