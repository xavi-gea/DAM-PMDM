import { createContext, useState } from 'react';

const Context = createContext();

export const Provider = ({ children }) => {
    const [song, setSong] = useState("");

  return (
    <Context.Provider value={{ song, setSong }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
