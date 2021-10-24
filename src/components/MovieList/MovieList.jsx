import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from 'slugify';

import s from './MovieList.module.css';

export default function MovieList({ movies, url = '', location }) {
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
  location: PropTypes.object.isRequired,
};
