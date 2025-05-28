import React from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import Routes from './routes';
import './assets/styles/theme.css';

function App() {
  return (
    <Router>
      <header>
        <img src="/logo.png" alt="SONAR Logo" className="logo" />
        <nav>
          <NavLink exact to="/" activeClassName="active">Página Inicial</NavLink>
          <NavLink to="/dashboards" activeClassName="active">Dashboards</NavLink>
          <NavLink to="/market-studies" activeClassName="active">Estudos de Mercado</NavLink>
          <NavLink to="/reports" activeClassName="active">Panorama de Mercado</NavLink>
          <NavLink to="/tools" activeClassName="active">Toolbox</NavLink>
          <NavLink to="/strategy-room" activeClassName="active">Sala de Estratégia</NavLink>
          <NavLink to="/foresight" activeClassName="active">Foresight</NavLink>
          <NavLink to="/decision-room" activeClassName="active">Sala de Decisão</NavLink>
          <NavLink to="/central-im" activeClassName="active">Central IM</NavLink>
        </nav>
      </header>
      <main style={{ paddingBottom: '3rem' }}>
        <Routes />
      </main>
      <footer>
        SONAR – Inteligência de Mercado - 2025
      </footer>
    </Router>
  );
}

export default App;
