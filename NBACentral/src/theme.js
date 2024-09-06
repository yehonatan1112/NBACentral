import { createTheme } from '@mui/material/styles';

const theme = (mode) => ({
    palette: {
      mode,
      primary: {
        main: '#0e2433',
      },
    secondary: {
      main: '#ce1141', // NBA-like red
    },
    background: {
        default: mode === 'dark' ? '#121212' : '#f4f4f4',
        paper: mode === 'dark' ? '#1d1d1d' : '#ffffff',
      },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    // Add more typography settings as needed
  },
});

export default theme;
