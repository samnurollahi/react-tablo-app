import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Train from "./page/Train/Train";
import About from "./page/about/About";
import Container from "./components/container";

export default () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train" element={<Train />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  );
};
