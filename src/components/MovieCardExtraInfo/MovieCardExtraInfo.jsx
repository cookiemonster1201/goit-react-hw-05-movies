import { NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './MovieCardExtraInfo.module.css';
import WatchTrailerButton from 'components/WatchTrailerButton/WatchTrailerButton';

export default function MovieCardExtraInfo({ watchTrailer }) {
  const { url } = useRouteMatch();
  return (
    <div className={s.extraInfo}>
      <h1 className={s.subTitle}>Additional information</h1>
      {<WatchTrailerButton watchTrailer={watchTrailer} />}
      <ul>
        <li>
          <NavLink
            to={`${url}/cast`}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Cast
          </NavLink>
          <NavLink
            to={`${url}/reviews`}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

MovieCardExtraInfo.propTypes = {
  watchTrailer: PropTypes.func.isRequired,
};
