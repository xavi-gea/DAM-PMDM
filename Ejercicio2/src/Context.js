import { createContext, useState } from 'react';

const Context = createContext();

export const Provider = ({ children }) => {
  const [uri, setUri] = useState('');

  return (
    <Context.Provider value={{ uri, setUri }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
