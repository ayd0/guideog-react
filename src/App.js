import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import { fetchExploreList } from './features/explore/exploreSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExploreList());
  }, [dispatch]);

  return (
      <div className="App">
          <HomePage />
      </div>
  );
}

export default App;
