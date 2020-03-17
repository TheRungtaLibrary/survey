import React from 'react';

export const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    () => JSON.parse(window.localStorage.getItem(localStorageKey)) || ""
  );

  React.useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);

  return [value, setValue];
};