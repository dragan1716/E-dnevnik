import { useRef } from "react";

const useDebounce = () => {
  // const timeoutRef = (useRef < NodeJS.Timeout) | (null > null);
  const timeoutRef = useRef(null);
  const debounce = (func, delay) => {
    console.log("DEBOUNCE");
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(func, delay);
  };

  return debounce;
};

export default useDebounce;
