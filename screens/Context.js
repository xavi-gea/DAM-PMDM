import { createContext, useState } from 'react';

const Context = createContext();

export const Provider = ({ children }) => {

    const [photoSet, setPhotoSet] = useState([]);

    return (
        <Context.Provider value={{photoSet, setPhotoSet}}>
            {children}
        </Context.Provider>
    );
    
}

export default Context;