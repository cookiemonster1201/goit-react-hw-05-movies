import PropTypes from 'prop-types';
import s from './TrailerFrame.module.css';

export default function TrailerFrame({ trailer }) {
  return (
    <>
      {trailer ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          className={s.iFrame}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <p
            style={{
              textAlign: 'center',
              padding: '100px',
              backgroundColor: 'white',
            }}
          >
            Sorry, we couldn't find any trailers for this one...
          </p>
        </>
      )}
    </>
  );
}

TrailerFrame.propTypes = {
  trailer: PropTypes.object,
};
