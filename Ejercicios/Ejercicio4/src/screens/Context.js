import { createContext, useState } from 'react';

const Context = createContext();

export const Provider = ({ children }) => {
  const [uris, setUris] = useState([]);
  

  return (
    <Context.Provider value={{ uris, setUris }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
