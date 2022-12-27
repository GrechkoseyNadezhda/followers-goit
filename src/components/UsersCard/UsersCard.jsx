import PropTypes from 'prop-types';

import logo from '../../icons/logo.png';
import mainImg from '../../icons/bg.png';
import { Button } from '../Button/Button';
import { UserInfo } from '../UserInfo/UserInfo';

import css from './UsersCard.module.css';

export const UserCard = ({
  user,
  changeFollowersCount,
  followers,
  isFollow,
}) => {
  return (
    <li className={css.card}>
      <img className={css.logo} src={logo} alt="logo" />
      <img className={css.bg} src={mainImg} alt="mainPicture" />
      <UserInfo followers={followers} user={user} />
      <Button
        isFollow={isFollow}
        changeFollowersCount={changeFollowersCount}
        id={user.id}
      />
    </li>
  );
};

UserCard.propTypes = {
  changeFollowersCount: PropTypes.func.isRequired,
  followers: PropTypes.number.isRequired,
  isFollow: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};
