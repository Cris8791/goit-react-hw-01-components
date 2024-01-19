import React from 'react';
import Profile from './profile/Profile';
import user from './profile/user.json';
import Statistics from './statistics/Statistics';
import statsData from './statistics/data.json';
import FriendList from './friendList/FriendList';
import friends from './friendList/friends.json';
import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statsData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
