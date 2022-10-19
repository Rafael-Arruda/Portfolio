import { useState, createContext } from "react";

export const NavContext = createContext({});

function NavProvider({children}){
    const [status, setStatus] = useState(false);

    return(
        <NavContext.Provider value={{status, setStatus}}>
            {children}
        </NavContext.Provider>
    )
}

export default NavProvider;
