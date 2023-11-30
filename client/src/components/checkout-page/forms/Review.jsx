import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review order
      </Typography>
      <div className='border rounded-lg px-4 py-2'>
        <div>
            Shipping
            <div className='text-xs flex flex-col mt-1 text-gray-500 font-medium'>
                <p>John Smith</p>

                <p>4567 King st W</p>
                <p>Waterloo, Ontario, K1T F97</p>
                <p>Canada</p>
            </div>
        </div>
      </div>
      <div className='border rounded-lg px-4 py-2 mt-4 mb-8'>
        <div>
            Payment Details
            <div className='text-xs grid grid-cols-2 mt-1 text-gray-500 font-medium'>
                <p>Card Type</p>
                <p>Visa</p>

                <p>Card Holder</p>
                <p>John Smith</p>

                <p>Card Number</p>
                <p>xxxx-xxxx-xxxx-1234</p>

                <p>Expiry</p>
                <p>04/2024</p>
            </div>
        </div>
      </div>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total Payment" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $25.00
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}