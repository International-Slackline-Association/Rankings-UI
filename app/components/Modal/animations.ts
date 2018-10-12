import { TweenLite, Back, Power1} from 'gsap';

export const open = (overlayEl, windowEl, callback) => {
  TweenLite.fromTo(
    overlayEl,
    0.2,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      ease: Power1.easeOut,
      onComplete: callback,
    },
  );
  TweenLite.fromTo(
    windowEl,
    0.2,
    {
      opacity: 0,
      scale: 0.9,
    },
    {
      opacity: 1,
      scale: 1,
      ease: Power1.easeOut,
    },
  );
};


export const close = (overlayEl, windowEl, callback) => {
  TweenLite.to(
    overlayEl,
    0.2,
    {
      opacity: 0,
      ease: Power1.easeOut,
      onComplete: callback,
    },
  );
  TweenLite.to(
    windowEl,
    0.2,
    {
      opacity: 0,
      scale: 0.9,
      ease: Power1.easeOut,
    },
  );
};
