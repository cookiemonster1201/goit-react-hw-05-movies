import SearchBar from 'components/SearchBar/SearchBar';
import { searchMovie } from 'services/movieLib-api';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import PageHeading from 'components/PageHeading/PageHeading';
import MovieList from 'components/MovieList/MovieList';
import LoadMoreButton from 'components/LoadMoreButtom/LoadMoreButton';

export default function MovieSearch() {
  // const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query') ?? '';
  let searchPage = new URLSearchParams(location.search).get('page')
    ? Number(new URLSearchParams(location.search).get('page'))
    : 0;

  console.log(searchPage, location);

  useEffect(() => {
    if (location.search === '') {
      return;
    }
    showMatches(searchQuery, searchPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    searchPage -= 1;
  }, []);

  const changeLocation = (query, page) => {
    history.push({
      ...location,
      search: `query=${query}&page=${page}`,
    });
  };

  const showMatches = (query, page) => {
    searchMovie(query, page).then(response => {
      setMovies(prevMovies => [...prevMovies, ...response.data.results]);
      searchPage += 1;
      changeLocation(query, searchPage);
    });
  };

  const handleSubmit = query => {
    if (query !== searchQuery) {
      setMovies([]);
      searchPage = 0;
    }
    showMatches(query, searchPage + 1);
  };

  return (
    <>
      <PageHeading text="Movie Search" />
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <>
          <MovieList movies={movies} />
          <LoadMoreButton
            onClick={() => {
              showMatches(searchQuery, searchPage + 1);
            }}
          />
        </>
      )}
    </>
  );
}
