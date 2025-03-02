import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TrendingTv() {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [hoveredShow, setHoveredShow] = useState(null);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("tvFavorites");
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (err) {
        localStorage.setItem("tvFavorites", JSON.stringify([]));
      }
    }

    const fetchTvShows = async () => {
      const url = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzkxYjFjYmY3MjZmZWMyNTAyNmJmYjE2ZjU2MDVkNiIsIm5iZiI6MTc0MDg0MjYxOC45MDcsInN1YiI6IjY3YzMyNjdhNWZkZGFiZTNlYjNmNzZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TmuZoycoIj-mYv5-lkcxa6WWtdvGhGX-j_GuNDt-T6A'
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          setLoading(false);
          return;
        }
        const data = await response.json();
        setTvShows(data.results);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchTvShows();
  }, []);

  useEffect(() => {
    localStorage.setItem("tvFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (show, e) => {
    e.preventDefault();
    const isFavorite = favorites.some((fav) => fav.id === show.id);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== show.id));
    } else {
      setFavorites([...favorites, show]);
    }
  };

  if (loading)
    return <div className="text-center h-screen py-12 text-xl text-white">Loading...</div>;

  return (
    <div className="bg-dark-blue text-white px-4 py-10">
      <h1 className="text-3xl mb-8 pb-4 border-b border-border-dark">
        Trending TV Shows
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
        {tvShows.map((show) => (
          <div
            key={show.id}
            className="relative"
            onMouseEnter={() => setHoveredShow(show.id)}
            onMouseLeave={() => setHoveredShow(null)}
          >
            <Link
              to={`/tv/${show.id}`}
              className="relative group duration-500 hover:scale-105 block"
            >
              <div className="relative rounded-lg border-2 border-transparent hover:border-white">
                <img
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt={show.name}
                  className="w-full h-auto block rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/500x750?text=No+Image";
                  }}
                />
                <div className="absolute bottom-2 group-hover:translate-x-2 z-50 group-hover:translate-y-0 duration-500 translate-y-8 translate-x-3 bg-black/70 text-green-500 border-2 border-green-500 rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                  {Math.round(show.vote_average * 10)}%
                </div>
                <div
                  className={`absolute top-0 left-0 right-0 bg-black/70 flex items-center justify-center cursor-pointer transition-opacity duration-500 ${
                    hoveredShow === show.id ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={(e) => toggleFavorite(show, e)}
                >
                  <div className="text-white text-center p-4">
                    <p className="mb-2">
                      {favorites.some((fav) => fav.id === show.id)
                        ? "Remove from favorites"
                        : "Add to favorites"}
                    </p>
                    <span className="text-2xl">
                      {favorites.some((fav) => fav.id === show.id)
                        ? "❤️"
                        : "🤍"}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="mt-8 text-center text-base">{show.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingTv;