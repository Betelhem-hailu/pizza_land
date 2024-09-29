import './App.css'
import { Fasting, Featured, Footer, Header, Hero, Popular, Restaurants } from './components'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import { Login, Register } from './pages';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      <CssBaseline />
      <Header />
      <Hero />
      <Featured />
      <Restaurants />
      <Popular />
      <Fasting />
      <Footer />
    </ThemeProvider>
  )
}

export default App
