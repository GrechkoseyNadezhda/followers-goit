import PropTypes from 'prop-types';
import { UserCard } from '../UsersCard/UsersCard';
import css from './UserList.module.css';

export const UserList = ({
  followers,
  changeFollowersCount,
  isFollow,
  users,
}) => {
  return (
    <ul className={css.list}>
      {users.map((userCard, index) => {
        return (
          <UserCard
            key={userCard.id}
            user={userCard}
            changeFollowersCount={changeFollowersCount}
            followers={followers[index]}
            isFollow={isFollow[index]}
          />
        );
      })}
    </ul>
  );
};

UserList.propTypes = {
  followers: PropTypes.arrayOf(PropTypes.number),
  changeFollowersCount: PropTypes.func.isRequired,
  isFollow: PropTypes.arrayOf(PropTypes.bool),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
