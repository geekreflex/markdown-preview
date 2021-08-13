import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMarkdownFromStorage } from "../redux/markSlice";

const PREFIX = "markdown";

const useLocalStorage = (initialValue) => {
  const dispatch = useDispatch();

  const prefixedKey = PREFIX;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
    dispatch(getMarkdownFromStorage());
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
