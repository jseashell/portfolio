import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./header/Header";

function App() {
  return (
    <React.StrictMode>
      <Header />
      <main>
        <div className="outlet">
          <Outlet />
        </div>
      </main>
    </React.StrictMode>
  );
}

export default App;
