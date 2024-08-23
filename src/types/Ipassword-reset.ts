export interface IpasswordReset{
    current:string;
    New:string;
    confirm:string;
}
export const defaultPasswordResetState:IpasswordReset = {current:"",New:"",confirm:''}