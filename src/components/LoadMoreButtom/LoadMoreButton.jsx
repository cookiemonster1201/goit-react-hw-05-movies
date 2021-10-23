import PropTypes from 'prop-types';
import s from './LoadMoreButton.module.css';
export default function LoadMoreButton({ onClick }) {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      Show more
    </button>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
