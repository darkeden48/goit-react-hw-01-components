import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
// import FriendListItem from "./components/FriendListItem";
import FriendList from "./components/FriendList";

export default function App() {
  return (
    <div>
      <Statistics title="Upload stats" stats={data} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />,
    </div>
  );
}
