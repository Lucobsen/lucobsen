import { useLayoutEffect, type RefObject } from 'react';

const GAP = 24;
const TRAVEL_RATIO = 0.6;

/**
 * Lifts the nav up under the hero title at scroll 0 and settles it back into
 * its real layout slot as the page scrolls. Progress is written straight to the
 * DOM as a custom property so scrolling never triggers a React render.
 */
export const useHeroNavTransition = (
  navRef: RefObject<HTMLElement | null>,
  anchorRef?: RefObject<HTMLElement | null>
) => {
  useLayoutEffect(() => {
    const nav = navRef.current;
    const anchor = anchorRef?.current;
    if (!nav || !anchor) return;

    const setProgress = (value: number) =>
      nav.style.setProperty('--nav-p', `${value}`);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nav.style.setProperty('--nav-offset', '0px');
      setProgress(1);
      return;
    }

    let distance = Math.max(1, window.innerHeight * TRAVEL_RATIO);
    let frame = 0;

    const progress = () => Math.min(1, Math.max(0, window.scrollY / distance));

    const render = () => {
      frame = 0;
      setProgress(progress());
    };

    const measure = () => {
      // Neutralise the transform so the rect reports the resting layout
      // position rather than the currently animated one.
      setProgress(1);

      const navTop = nav.getBoundingClientRect().top + window.scrollY;
      const anchorBottom =
        anchor.getBoundingClientRect().bottom + window.scrollY;

      distance = Math.max(1, window.innerHeight * TRAVEL_RATIO);
      nav.style.setProperty(
        '--nav-offset',
        `${Math.max(0, navTop - (anchorBottom + GAP))}px`
      );

      render();
    };

    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(render);
    };

    measure();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      if (frame !== 0) cancelAnimationFrame(frame);
    };
  }, [navRef, anchorRef]);
};
