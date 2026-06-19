"use client";

import { useCallback, useId } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

type SparklesProps = {
  className?: string;
  color?: string;
  density?: number;
  size?: number;
  speed?: number;
  opacity?: number;
};

export function Sparkles({
  className,
  color = "#ffffff",
  density = 800,
  size = 1,
  speed = 1,
  opacity = 1,
}: SparklesProps) {
  // useId() tạo ra ":r0:" — sanitize thành id hợp lệ cho tsparticles
  const rawId = useId();
  const id = `sp-${rawId.replace(/:/g, "")}`;

  // init phải stable (useCallback + []) — bắt buộc theo API v3
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={init}>
      <Particles
        id={id}
        className={className}
        options={{
          background: { color: { value: "transparent" } },
          fullScreen: { enable: false, zIndex: 1 },
          fpsLimit: 120,
          detectRetina: true,
          particles: {
            color: { value: color },
            move: {
              enable: true,
              direction: "none",
              speed: { min: speed / 10, max: speed },
              straight: false,
            },
            number: { value: density },
            opacity: {
              value: { min: opacity / 10, max: opacity },
              animation: { enable: true, sync: false, speed: 3 },
            },
            size: { value: { min: size / 2.5, max: size } },
          },
        }}
      />
    </ParticlesProvider>
  );
}
