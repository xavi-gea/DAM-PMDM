import { createContext, useState } from 'react';

const Context = createContext();

export const Provider = ({ children }) => {

    const [sound, setSound] = useState(null);

    return (
        <Context.Provider value={{sound, setSound}}>
            {children}
        </Context.Provider>
    );
    
}

export default Context;