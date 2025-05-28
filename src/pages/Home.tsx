import React from 'react';
import UpdatesFeed from '../components/UpdatesFeed';
import NewsTicker from '../components/NewsTicker';
import CalendarList from '../components/CalendarList';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div>
      <section>
        <iframe
          title="Dashboard Principal"
          width="100%"
          height="400"
          src="https://app.powerbi.com/groups/4944bd95-87b4-44c1-939d-0c0586150d42/reports/8720a7c1-1928-4bf6-9263-79209203470e/ReportSection9cd5637970023d1edc16?ctid=72b5f416-8f41-4c88-a6a0-bb4b91383888&experience=power-biAS"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>
      <section style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ flex: 2 }}>
          <h2 className="section-title">Recados e Atualizações</h2>
          <UpdatesFeed />
        </div>
        <div style={{ flex: 1 }}>
          <h2 className="section-title">Últimas Notícias</h2>
          <NewsTicker />
          <h2 className="section-title">Calendário de Divulgações</h2>
          <CalendarList />
        </div>
      </section>
      <section>
        <h2 className="section-title">Estudos em Destaque</h2>
        <Carousel type="estudos" />
        <h2 className="section-title">Dashboards</h2>
        <Carousel type="dashboards" />
        <h2 className="section-title">Últimas Publicações</h2>
        <Carousel type="publicacoes" />
      </section>
    </div>
  );
}
