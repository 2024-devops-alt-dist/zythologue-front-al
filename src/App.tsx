import { Route, Routes } from 'react-router';
import './App.css';
import BeerPage from './pages/BeersPage';
import Header from './components/Header';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/beers" element={<BeerPage />} />
      </Routes>
    </>
  )
}

export default App;
