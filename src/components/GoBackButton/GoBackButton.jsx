import PropTypes from 'prop-types';
export default function GoBackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        backgroundColor: 'palegreen',
        borderRadius: '4px',
      }}
    >
      &#8656; Go back
    </button>
  );
}

GoBackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
