import { Routes, Route } from "react-router-dom";
import NameScene from "../components/NameScene";
import App from "../App";
import IntroScene from "../components/IntroScene";
import EidGreetingScene from "../components/EidGreetingScene/EidGreetingScene";
import AboutEidScene from "../components/AboutEidScene";

const AppRoutes = () => (
  <Routes>
    <Route element={<App />}>
      <Route index element={<IntroScene />} />
      <Route path="/name" element={<NameScene />} />
      <Route path="/celebration" element={<EidGreetingScene />} />
      <Route path="/about-eid" element={<AboutEidScene />} />
    </Route>
  </Routes>
);

export default AppRoutes;
