import { NavLink, useRouteMatch } from 'react-router-dom';
import s from './MovieCardExtraInfo.module.css';

export default function MovieCardExtraInfo() {
  const { url } = useRouteMatch();
  return (
    <div className={s.extraInfo}>
      <h1 className={s.subTitle}>Additional information</h1>
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
