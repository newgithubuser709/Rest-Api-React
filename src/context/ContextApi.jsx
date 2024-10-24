import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  //
  const [ScrollTarget, setScrollTarget] = useState(false);
  const [ShowCartAdded, setShowCartAdded] = useState(false);

  return (
    <Context.Provider
      value={{
        ScrollTarget,
        setScrollTarget,
        ShowCartAdded,
        setShowCartAdded,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
