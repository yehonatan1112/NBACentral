// src/pages/StatsPage.jsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import PlayerPointsChart from '../components/PlayerPointsChart';
import { fetchTopScorers } from '../services/nbaApi';

function StatsPage() {
  const [topScorers, setTopScorers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadScorers = async () => {
      try {
        const scorers = await fetchTopScorers();
        setTopScorers(scorers);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching top scorers:', error);
        setLoading(false);
      }
    };
    loadScorers();
  }, []);

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', marginTop: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Statistics
      </Typography>
      <PlayerPointsChart data={topScorers} />
      {/* Add more charts and stats as needed */}
    </Container>
  );
}

export default StatsPage;
