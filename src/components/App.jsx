import { useState, useEffect } from 'react';
import users from '../data/users.json';
import { UserList } from './UsersList/UserList';

export const App = () => {
  const [followers, setFollowers] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('followersList')) ??
      users.map(user => user.followers)
    );
  });
  const [isFollow, setIsFollow] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('isFollowList')) ??
      users.map(user => user.isFollow)
    );
  });

  useEffect(() => {
    localStorage.setItem('isFollowList', JSON.stringify(isFollow));
    localStorage.setItem('followersList', JSON.stringify(followers));
  }, [isFollow, followers]);

  const changeFollowersCount = id => {
    const elementId = users.findIndex(user => user.id === id);

    const folowersUpdate = [...followers];
    const isFollowUpdate = [...isFollow];

    if (!isFollow[elementId]) {
      folowersUpdate[elementId] = followers[elementId] + 1;
      isFollowUpdate[elementId] = true;
    } else {
      folowersUpdate[elementId] = followers[elementId] - 1;
      isFollowUpdate[elementId] = false;
    }

    setFollowers(folowersUpdate);
    setIsFollow(isFollowUpdate);
  };

  return (
    <UserList
      followers={followers}
      changeFollowersCount={changeFollowersCount}
      isFollow={isFollow}
      users={users}
    />
  );
};
