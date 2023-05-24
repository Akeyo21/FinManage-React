import SavingsIcon from '@mui/icons-material/Savings';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';

export enum BillType {
  Spending =  'Spending',
  Savings = 'Savings',
  Generosity = 'Generosity',
}

export const billTypeIconMap = {
  [BillType.Spending]: <CreditScoreIcon/>,
  [BillType.Savings]: <SavingsIcon/>,
  [BillType.Generosity]: <MoneyOffCsredIcon/>,
}

