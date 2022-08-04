

import React, { useContext, useReducer } from "react";
import { AppState, initialAppState, user } from "./state";
import { AppActions } from "./actions";
import { createContext } from "react";
import { userContextAPIProvider } from "../../contexts/idxUserContext";
import { userReducer } from "./reducer";


export interface propsTypes{
    children: React.ReactNode
}



export const UserContext = React.createContext<{
    state: AppState;
    dispatch: React.Dispatch<AppActions>;
}>({
        state: initialAppState,
        dispatch: () => undefined,
    });




export default function UserContextProvider({children} : propsTypes) { 




    const [state, dispatch]  = useReducer(userReducer, initialAppState);


    //example in sudo of how to init a async fetch function.
    //const login = async (
//     email: string,
//     password: string
//   ): Promise<void> => {
//     const user = await loginUser(email, password);
//     if (user) {
//       setUserAction(user, dispatch);
//     }
//   };







    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}



export function useMetaswap(){
    const value = React.useContext(UserContext)
    return value;
}
