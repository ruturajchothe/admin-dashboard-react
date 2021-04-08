import React from "react";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({children}) => {
    return <UserContext.Provider value={{userName:"Ruturaj", age:21}}>
        {children}
    </UserContext.Provider>
}