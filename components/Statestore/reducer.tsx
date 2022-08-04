import { time } from "console";
import { stat } from "fs";
import { ActionType, AddUser, AppActions , LogInUser, LogOutUser, UpdateUser } from "./actions";
import { AppState, user } from "./state";

export interface sleep{ 
    user: string
}

export function userReducer(state: AppState, action: AppActions) : AppState { 

console.log("Using use reducer!")
    switch (action.type){

        case ActionType.AddUser: 
                console.log("Adding user! ")
            
                
                    return{ ...state, users: [action.payload, ...state.users]};

        case ActionType.LogInUser:
                  //Fetch Id and 
                  console.log("fetching user from IDX...")
                  console.log(action.payload)

                //action payload should be an account ID so that we can search for the user in the idx array of users. 

                ///fetch action.payload account ID for identifying the user and logging them in. 
                return{...state, activeUser: {username: "LoggedInUser",
                    accountId: action.payload['accountId'],
                    followerIds: [],
                    followingIds:[],
                    dateJoined: "string",
                    bio: "string",
                    NFTs:[],
                    profilePic: "string" }
            }
        case ActionType.LogOutUser:
                return{...state, activeUser: {username: "defaultUser",
                accountId: "0.0.00000",
                followerIds: [],
                followingIds:[],
                dateJoined: "Jan 6, 2000",
                bio: "hellow world.",
                NFTs:[],
                profilePic: "nil"} 
                }
         case ActionType.UpdateUser:
                return{...state,
                    activeUser: action.payload
            }
        default:
                return state;
    }
}


//Async functions


const setUpIdx = async():Promise<user> =>{

    await new Promise(r => setTimeout(r, 2000));
    const user = {username: "Promised User from IDX",
    accountId: "-.-.-----",
    followerIds: [],
    followingIds:[],
    dateJoined: "Jan 6, 2000",
    bio: "Hello future...",
    NFTs:[],
    profilePic: "nil"};

    return user


}


//helper functions to simplify the caller

export const addUser = (User: user): AddUser => ({
    type: ActionType.AddUser,
    payload: User
})

export const logUserIn = (accountId: string): LogInUser => ({
    type: ActionType.LogInUser,
    payload: {accountId: accountId}
})

export const logUserOut = (accountId: string): LogOutUser =>({
    type: ActionType.LogOutUser,
    payload: {accountId: accountId}
})

export const updateUser = (User: user) : UpdateUser => ({
    type: ActionType.UpdateUser,
    payload: User
})