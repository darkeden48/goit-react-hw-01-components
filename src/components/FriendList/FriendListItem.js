import PropTypes from "prop-types";
import F from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  // const { avatar, name, isOnline } = this.props;
  return (
    <li className={F.item}>
      <span
        className={F.status}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      >
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  // id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
