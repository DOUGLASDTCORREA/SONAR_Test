import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard de Exemplo</h1>
      <p>
        Em breve, você verá aqui os dashboards interativos da área de Inteligência de Mercado.
      </p>
      <div style={{
        background: '#f5f5f5',
        border: '1px dashed #574AEE',
        padding: '2rem',
        borderRadius: '8px',
        color: '#464646',
        marginTop: '2rem',
        textAlign: 'center'
      }}>
        <strong>Dashboard Power BI</strong>
        <br />
        <span style={{ fontSize: '0.9rem' }}>
          (Exemplo: aqui será exibido o embed do Power BI quando disponível)
        </span>
      </div>
    </div>
  );
}
