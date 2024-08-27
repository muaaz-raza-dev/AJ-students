export interface IfeeRecordState{
    filters:{
        selected:{year:string;feeType:string;};
        available:{
            years:string[];
            feeTypes:{[key:string]:{[key:string]:string[]};};
        };
    };
    payload:IFeeRecord[]
}
export interface IFeeRecord{
        class: string;                     // The name of the class
        year: number;                      // The year of the fee record
        Invoice?: string;                  // Optional: Invoice number (if applicable)
        Time?: string;                     // Optional: Time of the transaction (if applicable)
        status: "Advanced Paid" | "Upcoming" | "Paid" | "Pending" | "No Fees"; // Status of the payment
        feeTitle?: string;                 // Optional: Title of the fee (if applicable)
        feeFrequency?: string;             // Optional: Frequency of the fee (if applicable)
        amount?: number;                   // Optional: Amount of the fee (if applicable)
        month?: string;                    // Optional: Month of the payment (if applicable)
        dueDate?: string;                  // Optional: Due date of the payment (if applicable)
        paymentDate?: string;              // Optional: Payment date (if applicable)
    
}
export const defaultFeeRecord:IfeeRecordState = {
filters:{selected:{feeType:"",year:""},available:{years:[],feeTypes:{}}},
payload:[]
}