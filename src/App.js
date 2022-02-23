import user from "./JSON/user.json";
import data from "./JSON/data.json";
import friends from "./JSON/friends.json";
import transactions from "./JSON/transactions.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
}
