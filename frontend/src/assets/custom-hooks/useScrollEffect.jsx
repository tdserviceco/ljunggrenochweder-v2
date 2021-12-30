import { useEffect, useState } from "react";
let useScrollEffect = (pos, direction = 'left', cssEffect = 'fade-in', debug = false) => {

  const [effect, setEffect] = useState(`scroll-${direction}`)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (debug) {
        console.log(scrolled)
      }
      if (scrolled >= pos) {
        setEffect(`scroll-${direction} ${cssEffect}`);
      }
      else {
        setEffect(`scroll-${direction}`)
      }
    })
  })
  return effect
}
export default useScrollEffect;
