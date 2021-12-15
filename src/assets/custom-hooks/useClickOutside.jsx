import { useRef, useEffect } from "react";
let useClickOutSide = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    //MaybeHandler = om vårt musklick "kanske" var utanför referensbehållaren så stäng menyn
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