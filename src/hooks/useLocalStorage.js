import { useState, useEffect } from "react";

const getStorageData = (keyName, defaultValue) => {
  const savedItem = localStorage.getItem(keyName);
  const parsedItem = JSON.parse(savedItem);
  return parsedItem || defaultValue;
}

const useLocalStorage = (keyName, initialValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(keyName) || String(initialValue) 
      );
    } catch (error) {
      currentValue = initialValue; 
    }

    return currentValue;
    // return getStorageData(keyName, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [value, keyName]);

  return [value, setValue];
}

export default useLocalStorage;

// import { useState, useEffect } from "react";

// const getStorageData = (keyName, defaultValue) => {
//   const savedItem = localStorage.getItem(keyName);
//   const parsedItem = JSON.parse(savedItem);
//   return parsedItem || defaultValue;
// }

// export default function useLocalStorage (keyName, initialValue) {
//   const [value, setValue] = useState(() => {
//     return getStorageData(keyName, initialValue);
//   });

//   useEffect(() => {
//     localStorage.setItem(keyName, JSON.stringify(value));
//   }, [keyName, value]);

//   return [value, setValue];
// }
