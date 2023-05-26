import { BillType } from "./BillTypeIcon.map";

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
