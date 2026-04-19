import { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    let nodes = [];

    const NODE_COUNT = 60;
    const MAX_DISTANCE = 120;

    let mouse = {
      x: null,
      y: null,
    };

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function createNodes() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const time = Date.now();

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            const opacity = 1 - dist / MAX_DISTANCE;
            ctx.strokeStyle = `rgba(20, 184, 166, ${opacity * 0.6})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      nodes.forEach((node, index) => {
        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            node.x += dx * 0.01;
            node.y += dy * 0.01;
          }
        }

        // 🔥 Pulse effect (each node slightly offset)
        const pulse = Math.sin(time * 0.004 + index) * 0.5 + 0.5;
        const radius = 1.5 + pulse * 1.5;

        ctx.fillStyle = `rgba(20, 184, 166, ${0.6 + pulse * 0.4})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Movement
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      requestAnimationFrame(draw);
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    resize();
    createNodes();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-5" />;
}
