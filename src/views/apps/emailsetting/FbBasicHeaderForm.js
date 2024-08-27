import React from 'react';
import {
  Box,
  FormControlLabel,
  Button,
  Grid,
  MenuItem,
  FormControl,
  Alert
} from '@mui/material';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import CustomRadio from '../../../components/forms/theme-elements/CustomRadio';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import ParentCard from './ParentCard';

const currencies = [
  {
    value: 'female',
    label: 'Female',
  },
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

const countries = [
  {
    value: 'india',
    label: 'India',
  },
  {
    value: 'uk',
    label: 'United Kingdom',
  },
  {
    value: 'srilanka',
    label: 'Srilanka',
  },
];

const FbBasicHeaderForm = () => {
  const [currency, setCurrency] = React.useState('');

  const handleChange2 = (event) => {
    setCurrency(event.target.value);
  };

  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange3 = (event) => {
    setSelectedValue(event.target.value);
  };

  const [country, setCountry] = React.useState('');

  const handleChange4 = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      
      <ParentCard title="TURN OFF" footer={
        <>
          <Button
            variant="contained"
            color="error"
            sx={{
              mr: 1,
            }}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </>
      }>

        <Grid container spacing={3} mb={3} mt={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Mailer name
            </CustomFormLabel>

            <CustomTextField id="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Host
            </CustomFormLabel>
            <CustomTextField id="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Driver
            </CustomFormLabel>
            <CustomTextField id="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Port
            </CustomFormLabel>
            <CustomTextField id="text" variant="outlined" fullWidth />
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Username
            </CustomFormLabel>

            <CustomTextField id="text" variant="outlined" fullWidth />
          </Grid>

          <Grid item lg={4} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Email id
            </CustomFormLabel>
            <CustomTextField id="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Encryption
            </CustomFormLabel>
            <CustomTextField id="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Password
            </CustomFormLabel>
            <CustomTextField id="text" variant="outlined" fullWidth />
          </Grid>
          
        </Grid>
      </ParentCard>
    </div>
  );
};

export default FbBasicHeaderForm;
