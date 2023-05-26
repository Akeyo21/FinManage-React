import React from 'react'
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import {Bill} from '../../Bills.types'
type props= {
  bills: Bill[]
  dueDate: string
}
const UniqueDueDateBills = ({bills, dueDate}:props) => {
  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography variant="h5" fontWeight={500}>
          {dueDate} of every month
        </Typography>
        <Divider />
        {bills.map((bill) => (
          <Typography m={1}>{bill.name}</Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default UniqueDueDateBills;
