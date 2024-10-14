import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, OrderHistory, PizzaOrder, Register } from './pages';

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
        <Route path="/pizzaorder" element={<PizzaOrder />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
