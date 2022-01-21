import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preview from "./Components/Preview/";
import App from "./Components/App/";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Preview /> } />
        <Route path="/todo" element={ <App /> } />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p className="mistake">404 mistake</p>
            </main>
          }
        />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
