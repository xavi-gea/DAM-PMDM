import { createContext, useState } from "react";

const Context = createContext();

export const Provider = ({children}) => {

    const [chosenRicks, setChosenRicks] = useState([]);
    const [ricksSelected, setRicksSelected] = useState(0);
    const [ricksToShow, setRicksToShow] = useState(["all"]);
    const [ricksUniqueKeys, setRicksUniqueKeys] = useState([]);

    return (

        <Context.Provider value={{chosenRicks, setChosenRicks, ricksSelected, setRicksSelected, ricksToShow, setRicksToShow, ricksUniqueKeys, setRicksUniqueKeys}}>
            {children}
        </Context.Provider>
    );
}

export default Context;