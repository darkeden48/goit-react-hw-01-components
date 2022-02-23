import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics(props) {
  const { title = "Upload stats", stats } = props;
  return (
    <section className={s.statistics}>
      {title.length > 0 && <h2 className="title">Upload stats</h2>}
      <ul className={s.stat_list}>
        {stats.map((stat) => (
          <li className={s.item} key={stat.id}>
            <span className={s.label}>{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

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
