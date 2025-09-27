import { useEffect, useRef, useState } from "react";

export default function useCountdown(totalSeconds, onExpire) {
  // kalan süre
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const tickRef = useRef(null);

  useEffect(() => {
    // yeniden başlat
    setSecondsLeft(totalSeconds);
  }, [totalSeconds]);

  useEffect(() => {
    // başlat
    if (tickRef.current) clearInterval(tickRef.current);
    tickRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          // süre bitince durdur
          clearInterval(tickRef.current);
          // 0'a düşünce uyar
          onExpire?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(tickRef.current);
  }, [onExpire]);

  const reset = () => setSecondsLeft(totalSeconds);

  return { secondsLeft, reset, elapsed: totalSeconds - secondsLeft };
}
