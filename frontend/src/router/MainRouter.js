import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/layouts/Header";
import CharacterDetail from "../pages/CharacterDetail";
import Home from "../pages/Home";

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
      </Routes>
    </Router>
  );
};

export default MainRouter;
