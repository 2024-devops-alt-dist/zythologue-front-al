import { Route, Routes } from 'react-router';
import './App.css';
import BeerPage from './pages/BeersPage';
import Header from './components/Header';
import BeerDetailPage from './pages/BeerDetailPage';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/beers' element={<BeerPage />} />
        <Route path='/beers/:id' element={<BeerDetailPage />} />
      </Routes>
    </>
  )
}

export default App;
