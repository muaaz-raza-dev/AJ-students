import moment from "moment";

export interface ItransactionHistoryState{
payload:{[key:string]:ItransactionHistory[]};
filters:{available:{years:number[]},selected:{year:number}}
}

export interface ItransactionHistory{
    Time:string;
    Transactions: {
        paymentTitle: string; paymentType: "Custom" | "Registered"; paymentConfigId: string;
        month?: string;
        year?: string;
        sessionId?: {acedmic_year:string};
        amount: {
          totalAmount: number;
          realAmount: number; discount: number
        }
      }[];
      amount: {
        totalAmount: number;
        realAmount: number; discount: number
      };
  Invoice: number;
}

export const intialTransactionHistoryState:ItransactionHistoryState={
    payload:{},
    filters:{selected:{year:moment().year()},available:{years:[moment().year()]}}
}