import { useState } from "react";

import { cardData } from "../context/types";

export default function useLocalStorage(
  key: string,
  initialValue = []
): [cardData | [], (value: any) => void] {
  const [storedValue, setStoredValue] = useState<cardData | []>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const establishValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, establishValue];
}
