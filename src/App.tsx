import { Route, Routes } from 'react-router';
import './App.css';
import BeerDetailPage from './pages/BeerDetailPage';
import BreweriesPage from './pages/BreweriesPage';
import BeersPage from './pages/BeersPage';
import BreweryDetailPage from './pages/BreweryDetailPage';
import Navbar from './components/Navbar';
import BeerCreationPage from './pages/BeerCreationPage';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<BeersPage />} />
        <Route path='/beers' element={<BeersPage />} />
        <Route path='/beers/:id' element={<BeerDetailPage />} />
        <Route path='/beers/create' element={<BeerCreationPage />} />
        <Route path='/breweries' element={<BreweriesPage />} />
        <Route path='/breweries/:id' element={<BreweryDetailPage />} />
      </Routes>
    </>
  )
}

export default App;
