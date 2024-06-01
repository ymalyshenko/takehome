import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Question from './pages/Questionnaire';
import NoMatch from './pages/NoMatch';

export default function CustomRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path=":questionId" element={<Question />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}
