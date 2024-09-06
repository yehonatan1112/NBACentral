// src/components/PlayerCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

function PlayerCard({ player }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={player.photoUrl} // Ensure your API provides a player photo URL
        alt={`${player.name} photo`}
      />
      <CardContent>
        <Typography variant="h6">{player.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          Position: {player.position}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Team: {player.teamName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/players/${player.id}`}>
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
}

export default PlayerCard;
