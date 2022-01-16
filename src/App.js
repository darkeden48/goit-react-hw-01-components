import user from "./user.json";
import data from "./data.json";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";

export default function App() {
  return (
    (
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    ),
    (<Statistics title="Upload stats" stats={data} />),
    (<Statistics stats={data} />)
  );
}
