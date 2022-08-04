//App state type
export interface AppState{
    activeUser: user | null,
    NFTs: NFT[],
    users: user[],
    marketplaceActions: marketplaceAction[],

}

//Property types 

export interface user{
    username: string;
    accountId: string; 
    followerIds: string[];
    followingIds: string[];
    dateJoined: string;
    bio: string;
    NFTs: NFT[];
    profilePic: string; 
}

export interface NFT{
    tokenId: string;
    serial: string;
    owner: string;
    ipfsURL: string;
    marketplaceAction: marketplaceAction[];

}

export interface marketplaceAction {
    tokenId: string;
    from: string;
    to: string;
    price: string; 
    itemUrl: string; 
    timestamp: string;
    items: number
}


///   Initial Metaswap App State 
export const initialAppState: AppState = {
    activeUser: null,
    NFTs: [],
    users: [],
    marketplaceActions: [],
}