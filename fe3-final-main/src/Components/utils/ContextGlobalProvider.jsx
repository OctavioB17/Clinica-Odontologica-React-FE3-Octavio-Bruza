import { createContext, useMemo, useReducer, useEffect } from "react";

export const initialState = {
  theme: "light",
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(initialState);
const ContextGlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      dispatch({ type: "SET_THEME", payload: storedTheme });
    }
  }, []);

  useMemo(async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      dispatch({ type: "SET_DATA", payload: data });
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  const contextValue = useMemo(() => ({ theme: state.theme, data: state.data, toggleTheme }), [
    state.theme,
    state.data, 
  ]);

  return (
    <ContextGlobal.Provider value={{ contextValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobalProvider;