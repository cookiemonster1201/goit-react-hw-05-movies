import { Route, Redirect, Switch } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import Navigation from 'components/Navigation/Navigation';

const Homepage = lazy(
  () => import('./pages/Homepage') /* WebpackCHunkName: "homepage" */,
);
const MoviesPage = lazy(
  () => import('./pages/MoviesPage') /* WebpackCHunkName: "movies-page" */,
);
const MovieDetailsPage = lazy(
  () =>
    import(
      './pages/MovieDetailsPage'
    ) /* WebpackCHunkName: "movie-details-page" */,
);

export default function App() {
  return (
    <>
      <Navigation />

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
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Redirect to="/" />
        </Switch>
        <ToastContainer theme="colored" />
      </Suspense>
    </>
  );
}
