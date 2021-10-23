import { Route, Redirect, Switch } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Homepage from 'pages/Homepage';
import MoviesPage from 'pages/MoviesPage';
import Navigation from 'components/Navigation/Navigation';
import MovieDetailsPage from 'pages/MovieDetailsPage';

export default function App() {
  return (
    <>
      <Navigation />

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
    </>
  );
}
