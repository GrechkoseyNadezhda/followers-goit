import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ isFollow, changeFollowersCount, id }) => {
  return (
    <button
      className={isFollow ? css.btnActive : css.btn}
      onClick={() => changeFollowersCount(id)}
    >
      {isFollow ? 'FOLLOWIG' : 'FOLLOW'}
    </button>
  );
};

Button.propTypes = {
  isFollow: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  changeFollowersCount: PropTypes.func.isRequired,
};
