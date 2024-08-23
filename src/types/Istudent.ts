export interface Istudent{
        FirstName: string;
        LastName?: string;
        photo: string;
        email?: string;
        contact: string[];
        fatherName: string;
        DOB: string; // Consider using Date type if you store actual dates
        Gender?: string;
        Address?: string;
        GRNO: string;
        RollNo: number;
        CurrentSection: {name:string}; // Assuming ObjectId is defined
        NewAdmission?: boolean;
        CovidVaccine?: boolean;
        sCNIC?: string;
        fCNIC?: string;
        mCNIC?: string;
        WA?: string; // WhatsApp number
        DOA: string; // Consider using Date type if you store actual dates
        CurrentClass: {name:string}; // Assuming ObjectId is defined
        PolioPermission?: boolean;
        firstClass: {name:string};
        firstAdmittedClass?: string; 
}
