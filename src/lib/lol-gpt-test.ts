import { useEffect, useRef, useState } from "react";

type TailwindBreakpoints = {
  base: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  "2xl"?: string;
};

const TW_BREAKPOINTS: Record<keyof TailwindBreakpoints, number> = {
  base: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useTailwindBackground(
  images: TailwindBreakpoints
): React.CSSProperties {
  const ref = useRef<HTMLElement | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    if (!ref.current) return;

    const dpr = window.devicePixelRatio || 1;

    const pickImage = (w: number) => {
      if (w < TW_BREAKPOINTS.sm) return images.base;
      if (w < TW_BREAKPOINTS.md) return images.sm ?? images.base;
      if (w < TW_BREAKPOINTS.lg) return images.md ?? images.sm ?? images.base;
      if (w < TW_BREAKPOINTS.xl) return images.lg ?? images.md;
      if (w < TW_BREAKPOINTS["2xl"]) return images.xl ?? images.lg;
      return images["2xl"] ?? images.xl ?? images.lg;
    };

    const ro = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width * dpr;
      const url = pickImage(width);

      setBackgroundImage(prev =>
        prev === url ? prev : `url("${url}")`
      );
    });

    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [images]);

  return {
    ref,
    style: {
      backgroundImage,
    },
  } as unknown as React.CSSProperties;
}


/// Usage


function Slide() {
  const { ref, style } = useTailwindBackground({
    base: "/img-480.jpg",
    sm: "/img-640.jpg",
    md: "/img-768.jpg",
    lg: "/img-1024.jpg",
    xl: "/img-1280.jpg",
    "2xl": "/img-1536.jpg",
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={style}
      className="h-full w-full bg-cover bg-center"
    />
  );
}
