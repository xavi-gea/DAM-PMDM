import { createContext, useState } from "react";

const Context = createContext();

export const Provider = ({children}) => {

    const [songSearchText, setSongSearchText] = useState("");

    return (

        <Context.Provider value={{songSearchText, setSongSearchText}}>
            {children}
        </Context.Provider>
    );
}

export default Context;