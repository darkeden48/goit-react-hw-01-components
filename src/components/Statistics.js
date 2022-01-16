import PropTypes from "prop-types";
import "./Statistics.css";
export default function Statistics(props) {
  const { title = "Upload stats", stats } = props;
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="title">Upload stats</h2>}
      <ul className="stat-list">
        {stats.map((stat) => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
// Statistics.propTypes = {
//   title: PropTypes.string.isRequired,
//   stats: PropTypes.string.isRequired
//   };

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
