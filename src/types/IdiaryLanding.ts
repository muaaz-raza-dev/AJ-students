export interface IdiaryLanding{
    diaries:IshortDiary[];
    isLoading:boolean;
}

export interface IshortDiary{
    _id:string;
    title:string;
    date:Date;
    tags:string[]
}

export const defaultDiaryLandingState:IdiaryLanding = {
    diaries: [],
    isLoading: false,
}