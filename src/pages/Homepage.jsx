import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { fetchTrendingMovies } from '../services/movieLib-api';
import PageHeading from '../components/PageHeading/PageHeading';
import MovieList from 'components/MovieList/MovieList';
import LoadMoreButton from 'components/LoadMoreButtom/LoadMoreButton';

export default function Homepage() {
  const { url } = useRouteMatch();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const showMovies = () => {
    fetchTrendingMovies(page).then(response => {
      setMovies(prevMovies => [...prevMovies, ...response.data.results]);
    });
    setPage(prevPage => (prevPage += 1));
  };

  useEffect(() => {
    showMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && (
        <>
          <MovieList movies={movies} url={url} />
          <LoadMoreButton onClick={showMovies} />
        </>
      )}
    </>
  );
}
