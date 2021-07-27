const GraphLine = ({ percent }) => {
  return (
    <div className="skills__graph-line">
      <div
        className="skills__line-percent"
        style={{ width: `${percent}` }}
      ></div>
    </div>
  );
};

export default GraphLine;
