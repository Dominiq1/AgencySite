import { user } from "./state";
//action Types enumeration reference
export enum ActionType { 
    AddUser,
    LogInUser,
    UpdateUser,
    LogOutUser,
}


//function types
export interface AddUser{
     type: ActionType.AddUser;
     payload: user;
}

export interface LogInUser{
    type: ActionType.LogInUser;
    payload: {accountId: string};
}


export interface UpdateUser {
    type: ActionType.UpdateUser,
    payload: user;
}

export interface LogOutUser {
    type: ActionType.LogOutUser,
    payload: {accountId: string};
}

export type AppActions = AddUser | LogInUser | UpdateUser | LogOutUser; 

