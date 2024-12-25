import { createContext, useState } from "react";

const Context = createContext();

export const Provider = ({children}) => {

    const [chosenRicks, setChosenRicks] = useState([]);

    return (

        <Context.Provider value={{chosenRicks, setChosenRicks}}>
            {children}
        </Context.Provider>
    );
}

export default Context;