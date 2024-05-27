import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
import { useDispatch } from 'react-redux';
import { fetchMovies } from './store/moviesSlice';
import MovieList from './pages/MovieList';
import FavoriteMovies from './pages/FavoriteMovies';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Router>
      <div className="container mx-auto px-4 w-full">
        <nav className="flex justify-between py-4 ">
          <Link to="/" className="text-xl font-bold">Movies</Link>
          <Link to="/favorites" className="text-xl font-bold">Favorites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
