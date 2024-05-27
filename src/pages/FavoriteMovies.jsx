import { useSelector } from 'react-redux';

const FavoriteMovies = () => {
  const favorites = useSelector(state => state.movies.favorites);

  if (favorites.length === 0) return <div className='flex text-lg font-semibold noMov' >No favorite movies.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
      {favorites.map(movie => (
        <div key={movie.id} className="bg-white rounded-lg shadow-lg p-4 text-black hover:scale-105 transition-all">
          <h3 className="text-lg font-bold">{movie.movie}</h3>
          
          <p>Rating: {movie.rating}</p>
          
          <div className="flex justify-between items-center mt-4">
            <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">IMDb</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoriteMovies;
