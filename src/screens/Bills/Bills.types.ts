export type Bill = {
  id: string;
  name: string;
  amount: number;
  type: string;
  dueDate: string[];
  paymentDetails?: {
    payBill: string;
    accountNumber: string;
  };
};
