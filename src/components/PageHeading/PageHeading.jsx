import PropTypes from 'prop-types';
import s from './PageHeading.module.css';
export default function PageHeading({ text }) {
  return <h1 className={s.heading}>{text}</h1>;
}

PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};
