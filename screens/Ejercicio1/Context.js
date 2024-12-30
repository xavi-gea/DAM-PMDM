import { createContext, useState } from "react";

const Context = createContext();

export const Provider = ({children}) => {

    const [chosenRicksIDs, setChosenRicksIDs] = useState([]);
    const [ricksToShow, setRicksToShow] = useState(["all"]);
    const [ricksUniqueKeys, setRicksUniqueKeys] = useState([]);

    return (

        <Context.Provider value={{chosenRicksIDs, setChosenRicksIDs, ricksToShow, setRicksToShow, ricksUniqueKeys, setRicksUniqueKeys}}>
            {children}
        </Context.Provider>
    );
}

export default Context;