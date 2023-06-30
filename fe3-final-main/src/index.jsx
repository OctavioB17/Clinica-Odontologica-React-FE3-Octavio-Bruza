import React from 'react';
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import CardFull from "./Components/CardFull";
import ContextGlobalProvider from "./Components/utils/ContextGlobalProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextGlobalProvider>
        <Routes>
          <Route element={<App />}>
            <Route path='/home' element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/dentist/:id" element={<CardFull />} />
          </Route>
        </Routes>
      </ContextGlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);