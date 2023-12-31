import { Profile } from './Profile/Profile';
import profileUserData from '../components/Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import statisticsData from '../components/Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friendListData from '../components/FriendList/friends.json';
import { TransactionList } from './TransactionHistory/TransactionHistory';
import transactionListData from '../components/TransactionHistory/transactions.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile items={profileUserData} />
      {/* if title empty - h2 won´t render */}
      <Statistics items={statisticsData} title={'Upload stats'} />
      <FriendList items={friendListData} />
      <TransactionList items={transactionListData} />
    </>
  );
};
