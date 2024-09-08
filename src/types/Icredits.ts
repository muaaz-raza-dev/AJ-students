export interface Icredits{
Info?:IbasicInfo;
otherAccounts?:IshortAccount[];
isLogined:boolean;
}

export interface IshortAccount{
    Name:string;
    _id:string;
    email:string;
    photo:string
}
export interface IbasicInfo{
    _id:string;
    GRNO:string;
    Name:string;
    photo:string;
    email:string;
    Student:string; // _id
}
export const defaultCredits : Icredits ={
    isLogined:false
} 