import { useEffect, useRef, useState } from "react";

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setVisible(entry.isVisible)
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }

  }, [containerRef, options])
};

export default useElementOnScreen;