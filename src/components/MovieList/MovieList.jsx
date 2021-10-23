import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from 'slugify';

import s from './MovieList.module.css';

export default function MovieList({ movies, url = '' }) {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li key={movie.id} className={s.item}>
          <Link
            to={{
              pathname: `${url}movies/${slugify(`${movie.title} ${movie.id}`, {
                lower: true,
              })}`,
              state: { from: location },
            }}
            className={s.link}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  url: PropTypes.string,
};
