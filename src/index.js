import "react-app-polyfill/stable";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Experience } from "./experience/Experience";
import { Home } from "./home/Home";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Showcase } from "./showcase/Showcase";
import { Social } from "./social/Social";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="showcase" element={<Showcase />} />
        <Route path="experience" element={<Experience />} />
        <Route path="social" element={<Social />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
