import { useEffect, useState } from "react";
let useScrollEffect = (offset = '0px', direction = 'left', threshold = 0) => {
  let offSetLeft = '0px';
  let offSetRight = '0px';
  let offSetTop = '0px';
  let offSetBottom = '0px';
  const [effect, setEffect] = useState(`${direction}`)
  useEffect(() => {
    switch (direction) {
      case 'top':
        setEffect(`${direction}`)
        offSetTop = offset;
        break;

      case 'right':
        setEffect(`${direction}`)
        offSetRight = offset;
        break;

      case 'bottom':
        setEffect(`${direction}`)
        offSetBottom = offset;
        break;

      default:
        setEffect(`${direction}`)
        offSetLeft = offset;
        break;
    }
    let fadeIn = document.querySelectorAll(`.${direction}.fade-in`);
    const effectOptions = {
      threshold: [threshold],
      rootMargin: `${offSetTop} ${offSetRight} ${offSetBottom} ${offSetLeft}`
    };

    console.log(effectOptions.rootMargin)


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
    console.log(fadeIn)
  })
  return effect
}
export default useScrollEffect;
