import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { Header } from "./header/Header";

function App() {
  return (
    <React.StrictMode>
      <Header />
      <main>
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </main>
    </React.StrictMode>
  );
}

export default App;
