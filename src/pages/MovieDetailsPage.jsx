import { useParams, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../services/movieLib-api';
import MovieCard from 'components/MovieCard/MovieCard';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import GoBackButton from 'components/GoBackButton/GoBackButton';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(response => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <GoBackButton />
          <MovieCard movie={movie} />
        </>
      )}
      <Route path="/movies/:movieId/cast" exact>
        <Cast movieId={movieId} />
      </Route>

      <Route path="/movies/:movieId/reviews" exact>
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
}
