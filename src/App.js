import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import { fetchExploreList } from './features/explore/exploreSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExploreList());
  }, [dispatch]);

  return (
      <div className="App">
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='main' element={<MainPage />} />
          </Routes>
      </div>
  );
}

export default App;
