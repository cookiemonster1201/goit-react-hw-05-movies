import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getMovieReviews } from 'services/movieLib-api';
import s from './Reviews.module.css';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(response => {
      setReviews(response.data.results);
    });
  }, [movieId]);

  return (
    <>
      {reviews?.length > 0 ? (
        <ul className={s.list}>
          {reviews.map(({ author, id, content }) => (
            <li key={id}>
              <p className={s.author}>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center', padding: '20px' }}>
          Sorry, we don't have any reviews for this movie.
        </p>
      )}
    </>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
