export default function ProgressBar({ label, value }) {
  return (
    <div style={{ marginTop: 20 }}>
      <div
        className="row"
        style={{ justifyContent: "space-between", marginBottom: 6 }}
      >
        <span className="muted">{label}</span>
        <span className="muted">{Math.round(value)}%</span>
      </div>
      <div className="progress-wrap">
        <div className="progress-bar" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
