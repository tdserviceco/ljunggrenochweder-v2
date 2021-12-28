import { useEffect, useState } from "react";
let useScrollEffect = (pos, cssEffect) => {
  const [effect, setEffect] = useState('scroll')
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      console.log(scrolled)
      if (scrolled >= pos) {
        setEffect(`scroll ${cssEffect}`);
        console.log('postion: ', pos)
      }
      else {
        setEffect('scroll')
      }
    })
    console.log(pos, cssEffect)
  })
  return effect
}
export default useScrollEffect;
