import PropTypes from 'prop-types';

import defaultImage from './defaultImage.jpeg';
import s from './MovieCard.module.css';
import MovieCardExtraInfo from 'components/MovieCardExtraInfo/MovieCardExtraInfo';

export default function MovieCard({
  movie: { id, title, overview, genres, backdrop_path, vote_average },
}) {
  const score = (vote_average * 100) / 10;
  const movieGenres = genres.map(genre => genre.name);

  return (
    <>
      <div className={s.card}>
        <h1 className={s.title}>{title}</h1>
        <img
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
              : defaultImage
          }
          alt="movie poster"
        />
        <h2 className={s.subTitle}>User score:</h2> <p>{score}%</p>
        <h2 className={s.subTitle}>Overview:</h2> <p>{overview}</p>
        <h2 className={s.subTitle}>Genres:</h2>
        <ul>
          {' '}
          {movieGenres.map(genre => {
            return (
              <li key={genre} className={s.item}>
                {genre}
              </li>
            );
          })}{' '}
        </ul>
      </div>
      <MovieCardExtraInfo />
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
