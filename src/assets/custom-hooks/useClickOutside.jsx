import { useRef, useEffect } from "react";
let useClickOutSide = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    //MaybeHandler = if our mouseClick "maybe" was outside the container of refence then close the menu 
    let maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler()
      }
    }
    document.addEventListener("mousedown", maybeHandler)
    return () => { document.removeEventListener("mousedown", maybeHandler); }
  });
  return domNode;
}

export default useClickOutSide;