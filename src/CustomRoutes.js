import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";

export default function CustomRoutes() {
    return (
    <Router>
        <Routes>
           <Route path="/" element={<Main/>}/>
            {/* add other routes here */}
        </Routes>
    </Router>
  );
}
