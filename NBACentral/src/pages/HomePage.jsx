// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { fetchTopPlayers, fetchUpcomingGames, fetchLatestNews } from '../services/nbaApi';

function HomePage() {
  const [topPlayers, setTopPlayers] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const [players, games, news] = await Promise.all([
          fetchTopPlayers(),
          fetchUpcomingGames(),
          fetchLatestNews(),
        ]);
        setTopPlayers(players);
        setUpcomingGames(games);
        setLatestNews(news);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching home data:', error);
        setLoading(false);
      }
    };
    loadHomeData();
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
        Top Players
      </Typography>
      <Grid container spacing={2}>
        {topPlayers.map((player) => (
          <Grid item xs={12} sm={6} md={3} key={player.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{player.name}</Typography>
                <Typography variant="body2">Points: {player.points}</Typography>
                <Typography variant="body2">Assists: {player.assists}</Typography>
                <Typography variant="body2">Rebounds: {player.rebounds}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
        Upcoming Games
      </Typography>
      <Grid container spacing={2}>
        {upcomingGames.map((game) => (
          <Grid item xs={12} sm={6} md={4} key={game.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {game.homeTeam} vs {game.awayTeam}
                </Typography>
                <Typography variant="body2">Date: {new Date(game.date).toLocaleDateString()}</Typography>
                <Typography variant="body2">Time: {new Date(game.date).toLocaleTimeString()}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
        Latest News
      </Typography>
      <Grid container spacing={2}>
        {latestNews.map((article) => (
          <Grid item xs={12} key={article.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{article.title}</Typography>
                <Typography variant="body2">{article.summary}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
