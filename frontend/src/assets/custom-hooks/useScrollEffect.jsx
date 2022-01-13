import { useEffect } from "react";
let useScrollEffect = (direction, offset = '0px', threshold = 0) => {
  let offSetLeft = '0px';
  let offSetRight = '0px';
  let offSetTop = '0px';
  let offSetBottom = '0px';
  useEffect(() => {
    switch (direction) {
      case 'top':
        offSetTop = offset;
        break;

      case 'right':
        offSetRight = offset;
        break;

      case 'bottom':
        offSetBottom = offset;
        break;

      case 'left':
        offSetLeft = offset;
        break;

      default:
        break;
    }
    let fadeIn = document.querySelectorAll(`.fade-in`);
    const effectOptions = {
      threshold: [threshold],
      rootMargin: `${offSetTop} ${offSetRight} ${offSetBottom} ${offSetLeft}`
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        } else {
          entry.target.classList.remove("appear");
        }
      });
    },
      effectOptions);

    fadeIn.forEach(fader => {
      appearOnScroll.observe(fader);
    });

  })
  return
}
export default useScrollEffect;
