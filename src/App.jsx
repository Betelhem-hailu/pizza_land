import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, OrderHistory, PizzaOrder, Register } from './pages';
import { useSelector } from 'react-redux';
import PrivateRoute from './layout/PrivateRoute';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
  },
});

function App() {
const { user } = useSelector((state)=> (state.user))
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pizzaorder" element={<PizzaOrder />} />
        <Route path="/home" element={<Home />} />
        <Route path="/orders" element={<PrivateRoute user={user}><OrderHistory /> </PrivateRoute>} />
      </Routes>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
