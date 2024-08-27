export interface Itransaction {
  _id: string;
  Invoice: number;
  Time: string;
  Student: {
    GRNO: string;
    FirstName: string;
    LastName: string;
  },
  PayorsName: string;
  isDelayedRegistory?: boolean;
  RecievedBy: { Name: string },
  amount: {
    totalAmount: number;
    realAmount: number; discount: number
  };
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
  Note?: string;
}
