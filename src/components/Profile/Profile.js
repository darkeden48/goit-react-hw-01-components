import PropTypes from "prop-types";
import P from "./Profile.module.css";
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={P.profile}>
      <div className={P.description}>
        <img src={avatar} alt="User avatar" width="100%" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={P.stats}>
        <li>
          <span className={P.label}>Followers </span>
          <span className={P.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={P.label}>Views </span>
          <span className={P.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={P.label}>Likes </span>
          <span className={P.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
export default Profile;
