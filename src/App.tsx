import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "./pages/Home/Home";
import AddLocker from "./pages/Locker/AddLocker";
import LockerList from "./pages/Locker/LockerList";
import Login from "./pages/Login/Login";
import Loading from "./components/Loading/Loading";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
    }, 1000);
  };

  if (loading) return <Loading />;

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
