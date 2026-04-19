import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y - 150,
        left: pos.x - 150,
        width: 300,
        height: 300,
        background:
          "radial-gradient(circle, rgba(20,184,166,0.15), transparent 70%)",
        pointerEvents: "none",
        zIndex: 4, // BELOW text (10), ABOVE particles (5)
        filter: "blur(40px)",
      }}
    />
  );
}
