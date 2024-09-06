// services/nbaApi.js
export const fetchTeams = async () => {
    const response = await fetch('https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=df2ac4a50c30404aa4d9a5b83e533acd');
    return response.json();
};

export const fetchPlayerStats = async (playerId) => {
    const response = await fetch(`https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStatsByPlayer/2024/${playerid}?key=df2ac4a50c30404aa4d9a5b83e533acd`);
    return response.json();
};
export const fetchTopPlayers = async () => {
    // Implementation for fetching top players
};

export const fetchUpcomingGames = async () => {
    // Implementation for fetching upcoming games
};

export const fetchLatestNews = async () => {
    // Implementation for fetching the latest news
};

export const fetchTopScorers = async () => {
    // Implementation for fetching the latest news
};