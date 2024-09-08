export interface IconnectedDevice{
ip:string;
locationInfo:{
city:string;
country:string;
lat:string;
lon:string;


};
deviceInfo:{
    os:string;
    platform:string;
    browser:string
    
}
isPrimary:boolean
}