import { Route, Redirect } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import { spring, AnimatedSwitch } from 'react-router-transition';

import Navigation from 'components/Navigation/Navigation';
import s from './transitions/route-transitions.module.css';

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

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translate(-50%, 0) scale(${styles.scale})`,
  };
}
const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },

  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },

  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

export default function App() {
  return (
    <>
      <ThemeSwitcher />
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
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className={s.routeWrapper}
        >
          <Route path="/" exact>
            <Homepage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:slug">
            <MovieDetailsPage />
          </Route>

          <Redirect to="/" />
        </AnimatedSwitch>
      </Suspense>
      <ToastContainer theme="colored" />
    </>
  );
}
