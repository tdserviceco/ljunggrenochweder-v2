import { useEffect, useState } from "react";
let useScrollEffect = (direction = 'left') => {

  const [effect, setEffect] = useState(`${direction}`)

  useEffect(() => {
    if (direction !== 'left') setEffect(`${direction}`)
    let fadeIn = document.querySelectorAll(`.${direction}.fade-in`);
    const effectOptions = {
      threshold: 0,
      rootMargin: "-10px 0px 0px 0px"
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
    console.log(fadeIn)
  })
  return effect
}
export default useScrollEffect;
