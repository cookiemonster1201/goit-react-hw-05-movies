import PropTypes from 'prop-types';

import youTubeBtn from './youTubeBtn.png';
export default function WatchTrailerButton({ watchTrailer }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" onClick={watchTrailer}>
      <img
        src={youTubeBtn}
        alt="youtube link"
        width="80"
        style={{ display: 'block', margin: '0 auto', marginBottom: '20px' }}
      />
    </a>
  );
}

WatchTrailerButton.propTypes = {
  watchTrailer: PropTypes.func.isRequired,
};
