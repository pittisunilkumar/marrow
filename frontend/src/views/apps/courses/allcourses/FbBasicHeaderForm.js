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
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField';
import CustomSelect from '../../../../components/forms/theme-elements/CustomSelect';
import CustomRadio from '../../../../components/forms/theme-elements/CustomRadio';
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel';
import ParentCard from '../ParentCard';
import { Margin } from '@mui/icons-material';

// import { FbBasicHeaderForm } from 'src/components/forms/form-layouts';

const currencies = [
  {
    value:'Select Instructor',
    label: 'Select Instructor',
  },
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value:'User',
    label: 'User',
  },
];

// const countries = [
//   {
//     value: 'india',
//     label: 'India',
//   },
//   {
//     value: 'uk',
//     label: 'United Kingdom',
//   },
//   {
//     value: 'srilanka',
//     label: 'Srilanka',
//   },
// ];

const currencypostions = [
  {
    value:'Select Status',
    label: 'Select Status',
  },
  {
    value: 'Status',
    label: 'Active',
  },
  {
    value: 'Status',
    label: 'In active',
  },

];

const timezonevar = [
  {
    value:'Select Category',
    label: 'Select Category',
  },
  // {
  //   value:'sri',
  //   label:'(GMT+05:30) Jayawardenapura',
  // },
  // {
  //   value:'kathmandu',
  //   label:'(GMT+05:45) kathmandu',
  // },

];

const timeformate =[
  {
    value:'Select Course Type',
    label: 'Select Course Type',
  },
  {
    value:'Course',
    label:'Course',
  },
  {
    value:'Quiz',
    label:'Quiz',
  },
]


const FbBasicHeaderForm = () => {

  const [timef,setTimef] = React.useState('12');

  const handletimef = (event) => {
    setTimef(event.target.value);
  }

  const [tzone,setTzone] = React.useState('kolkata');

  const handletzone =(event) =>{
    setTzone(event.target.value);
  }

  const [currency, setCurrency] = React.useState('ind');

  const [currencysymbal,setCurrencysymbal] = React.useState('left');

  const handleChangecurrencyposition =(event) => {
    setCurrencysymbal(event.target.value);
  }
  const handleChange2 = (event) => {
    setCurrency(event.target.value);
  };

  const [country, setCountry] = React.useState('india');

  const handleChange4 = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      
      {/* <ParentCard title="TURN OFF" footer={
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
      }> */}

      {/*  */}

      <ParentCard title="All Courses" footer={
        <>
          
          <Button variant="contained" color="primary">
            Filter
          </Button>
        </>
      }>


        <Grid container spacing={3} mb={3} mt={1}>

          <Grid item lg={3} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Category
            </CustomFormLabel>
            <CustomSelect
              id="Category"
              value={tzone}
              onChange={handletzone}
              fullWidth
              variant="outlined"
            >
                {timezonevar.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </CustomSelect>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Course Type
            </CustomFormLabel>
            <CustomSelect
              id="time-zone-select"
              value={timef}
              onChange={handletimef}
              fullWidth
              placeholder="Select Course Type"
              variant="outlined"
            >
                {timeformate.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </CustomSelect>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Instructor
            </CustomFormLabel>
            <CustomSelect
              id="currencies-select"
              placeholder="Select Instructor"
              value={currency}
              onChange={handleChange2}
              fullWidth
              
              variant="outlined"
            >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </CustomSelect>
          </Grid>

          <Grid item lg={3} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Status
            </CustomFormLabel>


            {/* <CustomTextField id="text" variant="outlined" fullWidth /> */}

            <CustomSelect
              id="country-select"
              value={currencysymbal}
              onChange={handleChangecurrencyposition}
              fullWidth
              variant="outlined"
            >
                {currencypostions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </CustomSelect>


          </Grid>


          {/* <Grid item lg={4} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Digit after decimal point
            </CustomFormLabel>
            <CustomTextField id="text" value='0' type="number" variant="outlined" fullWidth />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Copy Right Text *
            </CustomFormLabel>
            <CustomTextField id="text" placeholder="Copy Right Text *" variant="outlined" fullWidth />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Cookies Text *
            </CustomFormLabel>
            <CustomTextField id="text" placeholder="Cookies Text *" variant="outlined" fullWidth />
          </Grid> */}

          {/* <Grid item lg={4} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Password
            </CustomFormLabel>
            <CustomTextField id="text" variant="outlined" fullWidth />
          </Grid> */}
          
        </Grid>
      </ParentCard>
    </div>
  );
};

export default FbBasicHeaderForm;
