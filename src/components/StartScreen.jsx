export default function StartScreen({ onStart, total }) {
  return (
    <div className="card">
      <h1 className="h1">Genel Kültür Mini Test</h1>
      {/* test hakkında bilgilendirme metni */}
      <p className="muted">
        Toplam {total} soru. Her soru ekranda en fazla <b>30 saniye</b> kalır;
        ilk
        <b> 4 saniye</b> cevap şıkları görünmez. Bir şıkka tıklayınca ya da süre
        dolunca otomatik olarak sonraki soruya geçilir. Geçmiş sorulara
        dönülmez.
      </p>
      {/* bilgi etiketleri */}
      <div className="row" style={{ marginTop: 16 }}>
        <span className="badge">Süre: 30sn / Soru</span>
        <span className="badge">İlk 4sn: Şıklar gizli</span>
        <span className="badge">Geri dönüş yok</span>
      </div>
      <div style={{ marginTop: 24 }}>
        <button className="btn" onClick={onStart}>
          Teste Başla
        </button>
      </div>
    </div>
  );
}
