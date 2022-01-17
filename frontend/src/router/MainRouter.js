import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/layouts/Header";
import CharacterDetail from "../pages/CharacterDetail";
import Favs from "../pages/Favs";
import Home from "../pages/Home";
import SingIn from "../pages/Login/SingIn";
import SingOut from "../pages/Login/SingOut";
import User from "../pages/User";

const MainRouter = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/Character/:id"
          element={<CharacterDetail />}
        ></Route>
        <Route exact path="/SingIn" element={<SingIn />}></Route>
        <Route exact path="/SingOut" element={<SingOut />}></Route>
        <Route exact path="/User" element={<User />}></Route>
        <Route exact path="/Favs" element={<Favs />}></Route>
      </Routes>
    </Router>
  );
};

export default MainRouter;
