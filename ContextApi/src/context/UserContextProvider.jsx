import React from "react";
import UserContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContextProvider value={{user, setUser}}>
        {children}
        </UserContextProvider>
    )
}

export default UserContextProvider