import { Link } from 'react-router-dom';
import s from './MovieList.module.css';

export default function MovieList({ movies, url = '' }) {
  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li key={movie.id} className={s.item}>
          <Link to={`${url}movies/${movie.id}`} className={s.link}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
