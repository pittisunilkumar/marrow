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
import { Margin } from '@mui/icons-material';

// import { FbBasicHeaderForm } from 'src/components/forms/form-layouts';

const currencies = [
  {
    value: 'ind',
    label: '(₹)INR',
  },
  {
    value: 'usa',
    label: '($)USA',
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

const currencypostions = [
  {
    value: 'left',
    label: '($)Left',
  },
  {
    value: 'right',
    label: 'Right($)',
  },

];

const timezonevar = [
  {
    value:'kolkata',
    label:'(GMT+05:30) Chennai,Kolkata,Mumbai,New Delhi',
  },
  {
    value:'sri',
    label:'(GMT+05:30) Jayawardenapura',
  },
  {
    value:'kathmandu',
    label:'(GMT+05:45) kathmandu',
  },

];

const timeformate =[
  {
    value:'12',
    label:'12 Hours',
  },
  {
    value:'24',
    label:'24 Hours',
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

      <ParentCard title="Company Information">

        <Grid container spacing={3} mb={3} mt={1}>

          <Grid item lg={3} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Company Name *
            </CustomFormLabel>
            <CustomTextField id="text" placeholder="Company name *" variant="outlined" fullWidth />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Email id *
            </CustomFormLabel>
            <CustomTextField id="text" placeholder="Email id *" variant="outlined" fullWidth />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Phone No *
            </CustomFormLabel>
            <CustomTextField id="text" placeholder="Phone No *" variant="outlined" fullWidth />
          </Grid>

          <Grid item lg={3} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              country
            </CustomFormLabel>


            {/* <CustomTextField id="text" variant="outlined" fullWidth /> */}

            <CustomSelect
              id="country-select"
              value={country}
              onChange={handleChange4}
              fullWidth
              variant="outlined"
            >
                {countries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </CustomSelect>


          </Grid>







          <Grid item lg={4} md={12} sm={12} xs={12}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Address
            </CustomFormLabel>

            <CustomTextField multiline id="cs-address" placeholder="150, Ring Road" fullWidth />
          </Grid>

          <Grid>

          </Grid>

          <Grid item lg={4} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Latitude             </CustomFormLabel>
            <CustomTextField id="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Longitude
            </CustomFormLabel>
            <CustomTextField id="text" variant="outlined" fullWidth />
          </Grid>

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

      <ParentCard title="General Setting" footer={
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

          <Grid item lg={3} md={6} sm={6} xs={6}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Time Zone *
            </CustomFormLabel>
            <CustomSelect
              id="time-zone-select"
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
              Time Formate *
            </CustomFormLabel>
            <CustomSelect
              id="time-zone-select"
              value={timef}
              onChange={handletimef}
              fullWidth
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
              Currency *
            </CustomFormLabel>
            <CustomSelect
              id="currencies-select"
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
              Currency Symbol Positon *
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


          <Grid item lg={4} md={6} sm={6} xs={6}>
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
          </Grid>

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
