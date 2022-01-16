export default function Statistics(props) {
  const { title = "Upload stats", stats } = props;
  console.log(stats);
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="title">Upload stats</h2>}
      <ul className="stat-list">
        <li className="item">
          <span className="label">{stats[0].label}</span>
          <span className="percentage">{stats[0].percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats[1].label}</span>
          <span className="percentage">{stats[1].percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats[2].label}</span>
          <span className="percentage">{stats[2].percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats[3].label}</span>
          <span className="percentage">{stats[3].percentage}</span>
        </li>
      </ul>
    </section>
  );
}
