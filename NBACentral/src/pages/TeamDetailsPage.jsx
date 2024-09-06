// src/pages/TeamDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, CircularProgress, Card, CardContent } from '@mui/material';
import { fetchTeamDetails, fetchTeamSchedule, fetchTeamRoster } from '../services/nbaApi';
import PlayerCard from '../components/PlayerCard';

function TeamDetailsPage() {
  const { teamId } = useParams();
  const [team, setTeam] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [roster, setRoster] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeamData = async () => {
      try {
        const [teamData, teamSchedule, teamRoster] = await Promise.all([
          fetchTeamDetails(teamId),
          fetchTeamSchedule(teamId),
          fetchTeamRoster(teamId),
        ]);
        setTeam(teamData);
        setSchedule(teamSchedule);
        setRoster(teamRoster);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching team details:', error);
        setLoading(false);
      }
    };
    loadTeamData();
  }, [teamId]);

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', marginTop: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!team) {
    return (
      <Container sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h6">Team not found.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {team.name} Details
      </Typography>
      <Grid container spacing={2}>
        {/* Team Info */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">{team.name}</Typography>
              <Typography variant="body1">City: {team.city}</Typography>
              <Typography variant="body1">Conference: {team.conference}</Typography>
              <Typography variant="body1">Division: {team.division}</Typography>
              <Typography variant="body1">
                Record: {team.wins} - {team.losses}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Games */}
        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            Upcoming Games
          </Typography>
          <Grid container spacing={1}>
            {schedule.map((game) => (
              <Grid item xs={12} sm={6} key={game.id}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle1">
                      {game.homeTeam} vs {game.awayTeam}
                    </Typography>
                    <Typography variant="body2">
                      Date: {new Date(game.date).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2">
                      Time: {new Date(game.date).toLocaleTimeString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Roster */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Roster
          </Typography>
          <Grid container spacing={2}>
            {roster.map((player) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={player.id}>
                <PlayerCard player={player} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TeamDetailsPage;
