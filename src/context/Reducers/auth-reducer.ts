import { IbasicInfo, Icredits, IshortAccount } from "@/types/Icredits";
import { PayloadAction } from "@reduxjs/toolkit";
interface IcreditsPayload{
    Info?:IbasicInfo
    isLogined?:boolean
    otherAccounts?:IshortAccount[]
}
export const InsertPayload=(state:Icredits,{payload:{Info,isLogined,otherAccounts}}:PayloadAction<IcreditsPayload>)=>{
if(Info) state.Info = Info
if(isLogined!=undefined) state.isLogined = isLogined
if(otherAccounts!=undefined) state.otherAccounts = otherAccounts
}