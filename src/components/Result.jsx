import questions from "../data/questions.js";

export default function Result({ log, total }) {
  // doğru, yanlış ve boş cevap sayısını hesapla
  const counts = log.reduce(
    (acc, r) => {
      if (r.selected == null) acc.empty++;
      else if (r.selected === r.correct) acc.correct++;
      else acc.wrong++;
      return acc;
    },
    { correct: 0, wrong: 0, empty: 0 }
  );

  return (
    <div className="card">
      {/* sonuç özeti */}
      <h1 className="h1">Sonuçlar</h1>
      <div className="row" style={{ marginBottom: 16 }}>
        <span className="badge">Doğru: {counts.correct}</span>
        <span className="badge">Yanlış: {counts.wrong}</span>
        <span className="badge">Boş: {counts.empty}</span>
        <span className="badge">Toplam: {total}</span>
      </div>

      {/* her soru için detaylı inceleme */}
      <h3>Cevap İncelemesi</h3>
      <div className="review">
        {log.map((r, i) => {
          const q = questions[r.qIndex];
          return (
            <div key={i} className="option">
              <div className="q-title">
                S{r.qIndex + 1}: {q.question}
              </div>
              <div style={{ marginTop: 6 }}>
                Senin yanıtın: <b>{r.selected ?? "— (boş)"}</b> | Doğru:{" "}
                <b>{r.correct}</b>
              </div>
            </div>
          );
        })}
      </div>

      {/* testi yeniden başlat */}
      <div style={{ marginTop: 20 }}>
        <a
          className="btn"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            location.reload();
          }}
        >
          Yeniden Dene
        </a>
      </div>
    </div>
  );
}
