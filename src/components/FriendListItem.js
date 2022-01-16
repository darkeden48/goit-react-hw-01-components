import PropTypes from "prop-types";
export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <li className="item">
      {isOnline === true && <span className="status">{isOnline}</span>}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
