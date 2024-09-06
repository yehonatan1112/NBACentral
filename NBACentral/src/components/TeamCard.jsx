// src/components/TeamCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

function TeamCard({ team }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={team.logoUrl} // Ensure your API provides a logo URL
        alt={`${team.name} logo`}
      />
      <CardContent>
        <Typography variant="h6">{team.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {team.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Wins: {team.wins} | Losses: {team.losses}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/teams/${team.id}`}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default TeamCard;
