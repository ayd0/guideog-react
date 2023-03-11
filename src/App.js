import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import { getNewCategories } from './features/explore/exploreSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewCategories());
  }, [dispatch]);

  return (
      <div className="App">
          <HomePage />
      </div>
  );
}

export default App;
