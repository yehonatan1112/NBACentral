// src/pages/TeamsPage.jsx (Using Redux)
import React, { useEffect } from 'react';
import { Container, Typography, Grid, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import TeamCard from '../components/TeamCard';
import { loadTeams } from '../store/teamsSlice';

function TeamsPage() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.teams);
  const teamStatus = useSelector((state) => state.teams.status);
  const error = useSelector((state) => state.teams.error);

  useEffect(() => {
    if (teamStatus === 'idle') {
      dispatch(loadTeams());
    }
  }, [teamStatus, dispatch]);

  let content;

  if (teamStatus === 'loading') {
    content = (
      <Container sx={{ textAlign: 'center', marginTop: 4 }}>
        <CircularProgress />
      </Container>
    );
  } else if (teamStatus === 'succeeded') {
    content = (
      <Grid container spacing={2}>
        {teams.map((team) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={team.id}>
            <TeamCard team={team} />
          </Grid>
        ))}
      </Grid>
    );
  } else if (teamStatus === 'failed') {
    content = (
      <Typography variant="h6" color="error">
        {error}
      </Typography>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        NBA Teams
      </Typography>
      {content}
    </Container>
  );
}

export default TeamsPage;
