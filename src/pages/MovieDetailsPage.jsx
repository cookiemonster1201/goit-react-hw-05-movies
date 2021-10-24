import { useParams, Route, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import { getMovieDetails } from '../services/movieLib-api';
import MovieCard from 'components/MovieCard/MovieCard';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import Modal from 'components/Modal/Modal';
import TrailerFrame from 'components/TrailerFrame/TrailerFrame';
import { getMovieTrailer } from '../services/movieLib-api';

const Reviews = lazy(
  () =>
    import('../components/Reviews/Reviews') /* WebpackCHunkName: "reviews" */,
);
const Cast = lazy(
  () => import('../components/Cast/Cast') /* WebpackCHunkName: "cast" */,
);

export default function MovieDetailsPage() {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  const [movie, setMovie] = useState(null);
  const [trailers, setTrailers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [from, setFrom] = useState(null);

  const location = useLocation();
  const history = useHistory();

  const goBack = () => {
    history.push(from ?? '/');
  };

  useEffect(() => {
    setFrom(location.state.from);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getMovieDetails(movieId).then(response => {
      setMovie(response.data);
    });
    getMovieTrailer(movieId).then(response => {
      setTrailers(response.data.results);
    });
  }, [movieId]);

  function toggleModal() {
    setShowModal(modal => !modal);
  }

  return (
    <>
      {movie && (
        <>
          <GoBackButton onClick={goBack} />
          <MovieCard movie={movie} watchTrailer={toggleModal} />
        </>
      )}

      {showModal && (
        <Modal closeModal={toggleModal}>
          <TrailerFrame trailer={trailers[0]} />
        </Modal>
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
        <Route path="/movies/:slug/cast" exact>
          <Cast movieId={movieId} />
        </Route>

        <Route path="/movies/:slug/reviews" exact>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </>
  );
}
