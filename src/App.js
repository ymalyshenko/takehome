import './App.css';
import { createTheme, ScopedCssBaseline, ThemeProvider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import CustomRoutes from './CustomRoutes';
import { Provider } from 'react-redux';
import store from './store/store';

const theme = createTheme({
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#0075FF',
    },
    secondary: {
      main: '#484848',
    },
    piction: {
      background: '#eaeaea',
      text: '#6c6c72',
      white: '#fff',
    },
    grayTones: {
      main: '#636363',
      light: '#eeeeee',
      lighter: '#f5f5f5',
      ultralight: '#fafafa',
    },
  },
  spacing: 8,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '1.75rem',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '1.25rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#222222',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#222222',
          textTransform: 'none',
          fontSize: '1rem',
          width: '10.5rem',
          height: '3.75rem',
          borderRadius: '1.25rem',
        },
      },
    },
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CustomRoutes />
          </LocalizationProvider>
        </ScopedCssBaseline>
      </ThemeProvider>
    </Provider>
  );
}
