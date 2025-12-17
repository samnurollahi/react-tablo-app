import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Train from "./page/Train/Train";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/train" element={<Train />} />
    </Routes>
  );
};
