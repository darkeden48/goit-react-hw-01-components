import FriendListItem from "./components/FriendListItem";
// import friends from './friends.json';
// export default function FriendList(props) {
//   const {friends} = props;
//   console.log(friends)
//   return (
// <ul class="friend-list">
// {friends.map(friend=>(<friends/>
// ))};
// </ul>
// );
// }
export default function FriendList(props) {
  const { friends } = props;
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
