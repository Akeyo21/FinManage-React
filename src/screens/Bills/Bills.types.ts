export enum BillType {
  Spending = "Spending",
  Savings = "Savings",
  Generosity = "Generosity",
}

export type Bill = {
  id: string;
  name: string;
  amount: number;
  type: BillType;
  dueDate: string[];
  paymentDetails?: {
    payBill: string;
    accountNumber: string;
  };
};
