import React from "react";

interface AuthContextModel {
  authorized: boolean;
  setAuthorized: (value: boolean) => void;
  basicAuth: string;
  setBasicAuth: (value: string) => void;
}

export const AuthContext = React.createContext<AuthContextModel>({
  authorized: false,
  setAuthorized: (val) => {console.log(val + " adf")},
  basicAuth: "Basic username:password",
  setBasicAuth: (val) => {console.log(val + " lel")},
});

export function useAuth() {
  return React.useContext(AuthContext);
}

function useSessionStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      // Get from local storage by key
      const item = window.sessionStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export function useProvideAuth(): AuthContextModel {
  const [authorized, setAuthorized] = React.useState(false);
  const [basicAuth, setBasicAuth] = useSessionStorage("basicAuth", "");

  return {
    authorized,
    setAuthorized,
    basicAuth,
    setBasicAuth,
  };
}
