import s from './PageHeading.module.css';
export default function PageHeading({ text }) {
  return <h1 className={s.heading}>{text}</h1>;
}
