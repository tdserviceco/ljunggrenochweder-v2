import { useEffect, useState } from "react";
let useScrollEffect = (pos, direction, cssEffect, debug = false) => {
  console.log("pos:", pos, "direction:", direction, "cssEffect: ", cssEffect, 'debug: ', debug)
  const [effect, setEffect] = useState(`scroll-${direction}`)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (debug) {
        console.log(scrolled)
      }
      if (scrolled >= pos) {
        setEffect(`scroll-${direction} ${cssEffect}`);
        console.log('postion: ', pos)
      }
      else {
        setEffect(`scroll-${direction}`)
      }
    })
  })
  return effect
}
export default useScrollEffect;
