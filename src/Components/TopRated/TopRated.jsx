import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TopRated() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (err) {
        localStorage.setItem("favorites", JSON.stringify([]));
      }
    }

    const fetchMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzkxYjFjYmY3MjZmZWMyNTAyNmJmYjE2ZjU2MDVkNiIsIm5iZiI6MTc0MDg0MjYxOC45MDcsInN1YiI6IjY3YzMyNjdhNWZkZGFiZTNlYjNmNzZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TmuZoycoIj-mYv5-lkcxa6WWtdvGhGX-j_GuNDt-T6A",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          setLoading(false);
          return;
        }
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = async (movie, e) => {
    e.preventDefault();
    const isFavorite = favorites.some((fav) => fav.id === movie.id);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  if (loading)
    return <div className="text-center h-screen py-12 text-xl">Loading...</div>;

  return (
    <div className="bg-dark-blue text-white px-10 py-10">
      <h1 className="text-3xl mb-8 pb-4 border-b border-border-dark">
        Top Rated Movies
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative"
            onMouseEnter={() => setHoveredMovie(movie.id)}
            onMouseLeave={() => setHoveredMovie(null)}
          >
            <Link
              to={`/movie/${movie.id}`}
              className="relative group duration-500 hover:scale-105 block"
            >
              <div className="relative rounded-lg border-2 border-transparent hover:border-white">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto block"
                />
                <div className="absolute bottom-2 group-hover:translate-x-2 z-50 group-hover:translate-y-0 duration-500 translate-y-8 translate-x-3 bg-black/70 text-green-500 border-2 border-green-500 rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                  {Math.round(movie.vote_average * 10)}%
                </div>
                <div
                  className={`absolute top-0 left-0 right-0 bg-black/70 flex items-center justify-center cursor-pointer transition-opacity duration-500 ${
                    hoveredMovie === movie.id ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={(e) => toggleFavorite(movie, e)}
                >
                  <div className="text-white text-center">
                    <p className="mb-2">
                      {favorites.some((fav) => fav.id === movie.id)
                        ? "Remove from favorites"
                        : "Add to favorites"}
                    </p>
                    <span className="text-2xl">
                      {favorites.some((fav) => fav.id === movie.id)
                        ? "❤️"
                        : "🤍"}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="mt-8 text-center text-base">{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRated;
