import React from 'react';

const updates = [
  { id: 1, text: "Novo relatório de mercado disponível!", date: "2025-05-20" },
  { id: 2, text: "Dashboard de desempenho atualizado.", date: "2025-05-18" },
  { id: 3, text: "Bem-vindo ao SONAR!", date: "2025-05-15" },
];

export default function UpdatesFeed() {
  return (
    <ul>
      {updates.map(update => (
        <li key={update.id}>
          <strong>{update.date}:</strong> {update.text}
        </li>
      ))}
    </ul>
  );
}
