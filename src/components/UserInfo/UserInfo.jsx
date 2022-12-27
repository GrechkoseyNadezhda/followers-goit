import css from './UserInfo.module.css';
import PropTypes from 'prop-types';

export const UserInfo = ({ followers, user }) => {
  return (
    <>
      <div className={css.icon}>
        <img className={css.iconImg} src={user.avatar} alt="herro" />
      </div>
      <p className={css.name}>{user.user}</p>
      <p className={css.tweets}>{user.tweets} TWEETS</p>
      <p className={css.followers}>
        {new Intl.NumberFormat('en-US').format(followers)} FOLLOWERS
      </p>
    </>
  );
};

UserInfo.propTypes = {
  followers: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    tweets: PropTypes.number.isRequired,
  }),
};
