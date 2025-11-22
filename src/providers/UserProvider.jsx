import {createContext, useState} from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const {children} = props;
    const [userInfo, setuserInfo] = useState(null);
    return (
        <UserContext.Provider value={{userInfo, setuserInfo}}>
            {children}
        </UserContext.Provider>
    )
};