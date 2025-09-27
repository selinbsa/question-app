# 🧠 Question App (React + Vite)

Bu proje, 10 soruluk zaman sınırlı bir **Genel Kültür Testi** uygular.  
React + Vite ile geliştirilmiş olup, hem masaüstü hem mobil için uygundur.

---
## Live Demo

---

## 🚀 Özellikler
- **React + Vite** altyapısı (hızlı geliştirme ortamı)
- 10 soruluk test, sorular `src/data/questions.js` dosyasından yüklenir
- Her soru için:
  - **30 saniye zaman limiti**
  - İlk **4 saniye cevap şıkları gizli**
  - Tıklanınca veya süre dolunca otomatik sonraki soruya geçiş
- Önceki sorulara **geri dönülemez**
- Test sonunda:
  - **Doğru / Yanlış / Boş** sayıları
  - Kullanıcının verdiği tüm cevapların listesi
- **Mobil uyumlu tasarım**
- Resimler `public/pictures/` klasöründen yüklenir

---

## 📂 Proje Yapısı

question-app/
├── public/
│ └── pictures/ # Soru görselleri
├── src/
│ ├── components/
│ │ ├── StartScreen.jsx # Giriş ekranı
│ │ ├── Quiz.jsx # Soru ekranı (timer + seçenekler)
│ │ └── Result.jsx # Sonuç ekranı
│ ├── hooks/
│ │ └── useCountdown.js # Geri sayım hook'u
│ ├── data/
│ │ └── questions.js # Soru ve cevap verileri
│ ├── index.css # Tüm stiller
│ └── App.jsx # Uygulama akışı
└── package.json

---

## 🛠️ Kurulum ve Çalıştırma


1. Projeyi klonla
git clone https://github.com/selinbsa/question-app.git
cd question-app

2.  Bağımlılıkları yükle
npm install

3.  Geliştirme sunucusunu başlat
npm run dev

4.  Ardından tarayıcıdan http://localhost:5173 adresine git.

---

## 💡 Kullanım

1. Teste Başla butonuna tıkla

2. Her soruda 30 sn süren var, ilk 4 sn şıklar gizli

3. Şıklardan birini seç veya süre dolmasını bekle

4. Tüm sorular bitince sonuç ekranında:

5. Doğru / Yanlış / Boş sayıları

6. Hangi soruya hangi cevabı verdiğin listelenir

7. Yeniden Dene butonuna basarak testi sıfırla

# 📱 Mobil Uyumluluk

- Şıklar mobilde tek kolon halinde, tablet/desktop’ta iki kolon halinde görünür

- Butonlar minimum 44px yüksekliğe sahiptir (dokunma standartlarına uygun)

- Görseller taşmadan ekrana sığar (object-fit: contain)

## 🧩 Teknolojiler

React 18 + Vite

JavaScript (ES6+)

CSS Grid / Flexbox ile responsive tasarım

Custom React Hook (useCountdown)

## 🙌 Katkı

Pull request açabilir veya issue oluşturabilirsin.
Projeyi geliştirmek için fikirlerin varsa discussions kısmında paylaşabilirsin.