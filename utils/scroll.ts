import React from 'react';

export const smoothScrollToRef = (ref: React.RefObject<HTMLElement>): void => {
  if (!ref.current) return;
  const targetPosition = ref.current.getBoundingClientRect().top + window.scrollY;
  smoothScrollTo(targetPosition, 1000); // 1000ms for the scroll duration
};

export const smoothScrollTo = (target: number, duration: number): void => {
  const start = window.scrollY;
  const distance = target - start;
  let startTime: number | null = null;

  const animation = (currentTime: number): void => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1
    const ease = easeInOutQuad(progress); // Easing function
    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const easeInOutQuad = (t: number): number => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};