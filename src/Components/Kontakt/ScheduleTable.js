import React from 'react';
import { Table } from '@mantine/core';

function ScheduleTable({schedule}) {
  return (
    <Table verticalSpacing="lg" style={{ }}>
      <thead>
        <tr>
          <th style={{ borderBottom: 'none' }}>Den</th>
          <th style={{ borderBottom: 'none' }}>Hodiny</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((entry) => (
          <tr key={entry.day}>
            <td style={{ borderBottom: 'none' }}>{entry.day}</td>
            <td style={{ borderBottom: 'none' }}>{entry.hours}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ScheduleTable;