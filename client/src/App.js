import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Card from "./pages/Card";
import UserContextProvider from "./context/UserContext";
import Navbar from "./components/Navbar";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<PublicRoute />}>
              <Route path="/" element={<Main />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="/card" element={<Card />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/profil" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
};

export default App;
