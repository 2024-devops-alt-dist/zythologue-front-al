import { Route, Routes } from 'react-router';
import './App.css';
import BeerPage from './pages/BeersPage';


function App() {

  return (
    <>
      <Routes>
        <Route path="/beers" element={<BeerPage />} />
      </Routes>
    </>
  )
}

export default App;
