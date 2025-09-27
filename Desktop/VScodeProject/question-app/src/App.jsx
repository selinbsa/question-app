import { useMemo, useState, useCallback } from "react";
import questions from "./data/questions.js";
import StartScreen from "./components/StartScreen.jsx";
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";

export default function App() {
  // aktif ekran: start | quiz | result
  const [stage, setStage] = useState("start");
  const [index, setIndex] = useState(0);
  // verilen cevapların kaydı
  const [log, setLog] = useState([]);

  const total = questions.length;

  const handleStart = () => {
    setStage("quiz");
    setIndex(0);
    setLog([]);
  };

  const handleAnswer = useCallback(
    (qIndex, selectedOrNull) => {
      const correct = questions[qIndex].answer;
      setLog((prev) => [
        ...prev,
        { qIndex, selected: selectedOrNull, correct },
      ]);
      // bir sonraki soruya ilerle
      if (qIndex + 1 < total) {
        setIndex(qIndex + 1);
      } else {
        setStage("result");
      }
    },
    [total]
  );

  // ilerleme yüzdesi
  const progress = useMemo(() => (index / total) * 100, [index, total]);

  return (
    <div className="container">
      {stage === "start" && <StartScreen onStart={handleStart} total={total} />}
      {stage === "quiz" && (
        <Quiz
          // her soruda zamanlayıcıyı resetlemek için
          key={index}
          index={index}
          total={total}
          question={questions[index]}
          // seçildiğinde veya süre bitince çağrılır
          onDecide={handleAnswer}
          progress={progress}
        />
      )}
      {stage === "result" && <Result log={log} total={total} />}
    </div>
  );
}
