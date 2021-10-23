export default function GoBackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        marginLeft: '300px',
        backgroundColor: 'palegreen',
        borderRadius: '4px',
      }}
    >
      &#8656; Go back
    </button>
  );
}
