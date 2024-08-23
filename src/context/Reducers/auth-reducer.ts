import { IbasicInfo, Icredits } from "@/types/Icredits";
import { PayloadAction } from "@reduxjs/toolkit";
interface IcreditsPayload{
    Info?:IbasicInfo
    isLogined?:boolean
}
export const InsertPayload=(state:Icredits,{payload:{Info,isLogined}}:PayloadAction<IcreditsPayload>)=>{
if(Info) state.Info = Info
if(isLogined!=undefined) state.isLogined = isLogined
}