import './App.css';
import {createTheme, ScopedCssBaseline, ThemeProvider} from "@mui/material";
import CustomRoutes from "./CustomRoutes";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#5f6368',
    },
    secondary: {
      main: '#1E4181',
    },
    piction: {
      background: '#eaeaea',
      text: '#6c6c72',
      white: '#fff'
    },
    grayTones: {
      main: '#636363',
      light: '#eeeeee',
      lighter: '#f5f5f5',
      ultralight: '#fafafa',
    }
  },
  spacing: 8,
});


function App() {
  return (
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline>
          <CustomRoutes />
        </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
