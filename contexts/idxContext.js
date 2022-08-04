import { resolve } from "path"
import React, { createContext, useContext, useEffect, useMemo, useState } from "react"


const initialState = {
    userName: "Metaswap",
    accountId: "0.0.502933",
}
//
export const IdxUserContext = createContext()


export function CreateActions(dispatch){
    return{
        updateProfile: () => dispatch({type: 'updateProfile'}),
        readProfile: () => dispatch({type: 'readProfile'}),
        logUserIn: () => dispatch({type: 'logUserIn'})
        
    }
}

export default function IdxUserprovider({children}){


    const [user, dispatch] = useAsyncReducer(IdxAsyncReducer,initialState)

    const actions = CreateActions(dispatch)

    const updateUser = (user) =>{
        dispatch({type:'updateProfile', payload: user})
    };

   // const LoggedInUser = useMemo(() => ({user, setUser}, [user, setUser]))


    useEffect(() => {

        console.log("IDX set Up!")
        return () => {

        };
    },
     [])


    return(
        <IdxUserContext.Provider value={{updateUser}}>
            {children}
        </IdxUserContext.Provider>
    )


}


//Async reducer inner function (state, action )
export function IdxAsyncReducer(state,  action) {
        //function awaiting resolved calue... 
    //New IDX Call goes here
                console.log("action type")
                 console.log(action.type)
                switch(action.type){
                    case "updateProfile": 
                        console.log("Update user profile on IDX");
                        console.log(action.payload)
                        return{...action.payload}
                
                    case 'readProfile': 
                        console.log("read user profile from Idx")
                        return{state}
                    
                    case 'logUserIn':
                        console.log(" performing IDX set up")
                        //Perform IDX Client set up? 
            
                           return {state}
                         

                   

                }



}



//IDX Async Reducer outer function (reducer, initia state)
export const useAsyncReducer = (reducer, initialState = null) =>{
    const [state, setState] = useState(initialState);

    const dispatch = async action =>{
        
        const result = reducer(state, action);

        if (typeof result.then == "function"){
            try{
                const newState = await result;
                setState(newState);
            }catch(err){
                setState({...state, error: err});
            }
        }else{
            setState(result)
        }
    };
    return [state,dispatch];
}



export function useIdx(){
    const value = useContext(IdxUserContext)
    return value
}