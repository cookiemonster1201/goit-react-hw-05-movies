import s from './LoadMoreButton.module.css';
export default function LoadMoreButton({ onClick }) {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      Show more
    </button>
  );
}
