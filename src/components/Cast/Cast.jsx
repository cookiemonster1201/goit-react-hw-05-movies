import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getMovieCast } from 'services/movieLib-api';
import defaultAvatar from './defaultAvatar.png';
import s from './Cast.module.css';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(response => {
      setCast(Object.values(response.data.cast));
    });
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <ul className={s.list}>
          {cast.map(({ name, character, id, profile_path }) => (
            <li key={id} className={s.item}>
              <p className={s.name}>{name}</p>
              <img
                className={s.img}
                width="200"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : defaultAvatar
                }
                alt={name}
              />
              <p>
                <span className={s.part}>Character: </span>
                {character}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center', padding: '20px' }}>
          Sorry, we don't have any information on the cast.
        </p>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
