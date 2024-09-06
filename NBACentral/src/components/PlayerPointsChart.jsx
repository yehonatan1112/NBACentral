// src/components/PlayerPointsChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

function PlayerPointsChart({ data }) {
  return (
    <Card sx={{ marginTop: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Top Scoring Players
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="points" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default PlayerPointsChart;
