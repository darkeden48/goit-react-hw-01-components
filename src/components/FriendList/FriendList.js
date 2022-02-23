import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  // const { friends } = props;
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
FriendList.propTypes = {
  // id: PropTypes.number.isRequired,
  friends: PropTypes.array.isRequired,
};
