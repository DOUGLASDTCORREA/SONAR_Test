import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './assets/styles/theme.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>SONAR</h1>
          {/* Navigation Menu can be added here */}
        </header>
        <main>
          <Routes />
        </main>
      </div>
    </Router>
  );
};

export default App;