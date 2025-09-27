import { useCallback, useMemo, useRef, useState } from "react";
import useCountdown from "../hooks/useCountdown.js";
import ProgressBar from "./ProgressBar.jsx";

const TOTAL_SECS = 30;
// ilk 4 saniye şıklar gizli/kapalı
const LOCK_SECS = 4; 

export default function Quiz({ index, total, question, onDecide, progress }) {
  // aynı soruda iki kere karar verme
  const decidedRef = useRef(false);
  const [locked, setLocked] = useState(true);

  const handleExpire = useCallback(() => {
    if (decidedRef.current) return;
    decidedRef.current = true;
    // boş
    onDecide(index, null);
  }, [index, onDecide]);

  const { secondsLeft, elapsed } = useCountdown(TOTAL_SECS, handleExpire);

  // İlk 4 saniye: şıklar kilitli
  const showOptions = elapsed >= LOCK_SECS;
  if (locked && showOptions) setTimeout(() => setLocked(false), 0);

  const pct = useMemo(
    () => ((TOTAL_SECS - secondsLeft) / TOTAL_SECS) * 100,
    [secondsLeft]
  );

  // Görsel yolu: public/pictures/* altında servis edilir
  const imgSrc = useMemo(() => `/pictures/${question.media}`, [question.media]);

  const onSelect = (opt) => {
    if (locked || decidedRef.current) return;
    decidedRef.current = true;
    onDecide(index, opt);
  };

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div className="badge">
          Soru {index + 1} / {total}
        </div>
        <div className="badge">Kalan: {secondsLeft}s</div>
      </div>

      <div className="progress-wrap" style={{ margin: "12px 0 18px" }}>
        <div className="progress-bar" style={{ width: `${pct}%` }} />
      </div>

      {/* Soru görseli */}
      {question.media && <img className="media" src={imgSrc} alt="" />}

      <h2 style={{ marginTop: 16 }}>{question.question}</h2>

      {!showOptions && (
        <div className="option disabled" aria-hidden="true">
          Şıklar {LOCK_SECS - elapsed}s sonra görünecek…
        </div>
      )}

      <div className={`options ${!showOptions ? "disabled" : ""}`}>
        {question.options.map((opt) => (
          <button
            key={opt}
            className={`option ${locked ? "disabled" : ""}`}
            onClick={() => onSelect(opt)}
            disabled={!showOptions || locked}
          >
            {opt}
          </button>
        ))}
      </div>

      <ProgressBar label="Test İlerlemesi" value={progress} />
    </div>
  );
}
