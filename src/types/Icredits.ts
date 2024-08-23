export interface Icredits{
Info?:IbasicInfo;
isLogined:boolean
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