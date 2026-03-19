import { createRoot } from "react-dom/client";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
);
