import { useState, useEffect } from 'react';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';

import { fetchTrendingMovies } from '../services/movieLib-api';
import PageHeading from '../components/PageHeading/PageHeading';
import MovieList from 'components/MovieList/MovieList';
import LoadMoreButton from 'components/LoadMoreButtom/LoadMoreButton';

export default function Homepage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();
  let searchPage = new URLSearchParams(location.search).get('page')
    ? Number(new URLSearchParams(location.search).get('page'))
    : 1;

  const showMovies = page => {
    fetchTrendingMovies(page).then(response => {
      setMovies(prevMovies => [...prevMovies, ...response.data.results]);
    });
    history.push({
      ...location,
      search: `page=${searchPage}`,
    });
  };

  useEffect(() => {
    showMovies(searchPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && (
        <>
          <MovieList movies={movies} url={url} />
          <LoadMoreButton
            onClick={() => {
              showMovies((searchPage += 1));
            }}
          />
        </>
      )}
    </>
  );
}
