import React from 'react';

const news = [
  { id: 1, title: "Portos brasileiros batem recorde de movimentação", url: "#" },
  { id: 2, title: "Nova regulação para armazenagem de granéis", url: "#" },
  { id: 3, title: "Tendências em infraestrutura logística", url: "#" },
];

export default function NewsTicker() {
  return (
    <ul>
      {news.map(item => (
        <li key={item.id}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
