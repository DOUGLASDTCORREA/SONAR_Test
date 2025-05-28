import React from 'react';

type CarouselProps = {
  type: 'estudos' | 'dashboards' | 'publicacoes';
};

const exampleItems = {
  estudos: [
    { id: 1, title: "Estudo de Mercado: Químicos", author: "Equipe IM", date: "2025-05-10" },
    { id: 2, title: "Análise Setorial: Portos", author: "Equipe IM", date: "2025-04-28" },
  ],
  dashboards: [
    { id: 1, title: "Dashboard de Combustíveis", author: "Equipe IM", date: "2025-05-05" },
    { id: 2, title: "Dashboard de Infraestrutura", author: "Equipe IM", date: "2025-04-20" },
  ],
  publicacoes: [
    { id: 1, title: "Infográfico: Movimentação 2025", author: "Equipe IM", date: "2025-05-15" },
    { id: 2, title: "Relatório: Tendências 2025", author: "Equipe IM", date: "2025-04-30" },
  ]
};

const Carousel: React.FC<CarouselProps> = ({ type }) => {
  return (
    <div className="carousel">
      {exampleItems[type].map(item => (
        <div className="carousel-card" key={item.id}>
          <h3>{item.title}</h3>
          <p><strong>Autor:</strong> {item.author}</p>
          <p><strong>Data:</strong> {item.date}</p>
          <a href="/content-example" className="button">Ver mais</a>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
