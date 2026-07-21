"use client";

import { useEffect, useRef, useState } from "react";

export default function DesktopScale({
  children,
  height,
}: {
  children: React.ReactNode;
  height: number;
}) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      setScale(vw < 1440 ? vw / 1440 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: height * scale,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          width: 1440,
          height,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
