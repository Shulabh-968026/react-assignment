import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from "./components/Card";
import Cards from "./components/Cards";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Cards/>}/>
            <Route path="/:id" element={<Card/>}/>
        </Routes>
    </Router>
  );
}

export default App;
