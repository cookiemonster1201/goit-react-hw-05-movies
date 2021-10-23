import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

export default function MovieList({ movies, url = '' }) {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li key={movie.id} className={s.item}>
          <Link
            to={{
              pathname: `${url}movies/${movie.id}`,
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
