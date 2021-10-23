import { useParams, Route, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import { getMovieDetails } from '../services/movieLib-api';
import MovieCard from 'components/MovieCard/MovieCard';
import GoBackButton from 'components/GoBackButton/GoBackButton';

const Reviews = lazy(
  () =>
    import('../components/Reviews/Reviews') /* WebpackCHunkName: "reviews" */,
);
const Cast = lazy(
  () => import('../components/Cast/Cast') /* WebpackCHunkName: "cast" */,
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const goBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  useEffect(() => {
    getMovieDetails(movieId).then(response => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <GoBackButton onClick={goBack} />
          <MovieCard movie={movie} />
        </>
      )}

      <Suspense
        fallback={
          <Loader
            type="Oval"
            color="#fffb1e"
            height={80}
            width={80}
            style={{ textAlign: 'center' }}
          />
        }
      >
        <Route path="/movies/:movieId/cast" exact>
          <Cast movieId={movieId} />
        </Route>

        <Route path="/movies/:movieId/reviews" exact>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </>
  );
}
