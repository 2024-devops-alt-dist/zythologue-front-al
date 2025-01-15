import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import BeerDetailPage from './pages/BeerDetailPage';
import BreweriesPage from './pages/BreweriesPage';
import BeersPage from './pages/BeersPage';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/beers' element={<BeersPage />} />
        <Route path='/beers/:id' element={<BeerDetailPage />} />
        <Route path='/breweries' element={<BreweriesPage />} />
      </Routes>
    </>
  )
}

export default App;
