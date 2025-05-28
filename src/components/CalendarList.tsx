import React from 'react';

const calendar = [
  { id: 1, event: "Divulgação do Relatório Mensal", date: "2025-06-01" },
  { id: 2, event: "Atualização do Dashboard de Mercado", date: "2025-06-10" },
  { id: 3, event: "Webinar: Cenários Futuros", date: "2025-06-20" },
];

export default function CalendarList() {
  return (
    <ul>
      {calendar.map(item => (
        <li key={item.id}>
          <strong>{item.date}:</strong> {item.event}
        </li>
      ))}
    </ul>
  );
}
