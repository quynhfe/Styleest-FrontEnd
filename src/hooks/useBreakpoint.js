import { useMediaQuery } from "./useMediaQuery";

export function useBreakpoint() {
  const isSm = useMediaQuery("(min-width: 640px) and (max-width: 767px)");
  const isMd = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isLg = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
  const isXl = useMediaQuery("(min-width: 1280px) and (max-width: 1535px)");
  const is2xl = useMediaQuery("(min-width: 1536px)");

  if (isSm) return "sm";
  if (isMd) return "md";
  if (isLg) return "lg";
  if (isXl) return "xl";
  if (is2xl) return "2xl";
  return "base";
}
