import React from 'react';
import Navbar from './components/organisms/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
};

export default App;
