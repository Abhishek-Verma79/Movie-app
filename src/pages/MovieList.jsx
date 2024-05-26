import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/moviesSlice';

const MovieList = () => {
  const { movies, status, error, favorites } = useSelector(state => state.movies);
  const dispatch = useDispatch();

  const handleFavoriteClick = (movie) => {
    dispatch(toggleFavorite(movie));
  };

  if (status === 'loading') return <div className='loading'>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {/* <img src="https://upload.wikimedia.org/wikipedia/sco/8/8a/Dark_Knight.jpg" alt="" /> */}
      {movies.map(movie => (
        <div key={movie.id} className="movie-card bg-white rounded-lg shadow-lg p-4 text-black" style={{ backgroundImage: `url(${movie.image})` }}>
          <div className="overlay">
            <h3 className="text-lg font-bold">{movie.movie}</h3>
            
            <p>Rating: {movie.rating}</p>
            
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleFavoriteClick(movie)}
                className={`px-2 py-1 rounded ${favorites.some(fav => fav.id === movie.id) ? 'bg-red-500' : 'bg-gray-200'}`}
              >
                {favorites.some(fav => fav.id === movie.id) ? 'Unfavorite' : 'Favorite'}
              </button>
              <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">IMDb</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
