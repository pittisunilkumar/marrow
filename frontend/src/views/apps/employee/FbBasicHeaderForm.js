import React from 'react';
import {
  Box,
  FormControlLabel,
  Button,
  InputAdornment,
  Grid,
  MenuItem,
  IconButton,
  FormControl,
  Alert
} from '@mui/material';

import { IconEye, IconEyeOff } from '@tabler/icons';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import CustomRadio from '../../../components/forms/theme-elements/CustomRadio';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import ParentCard from './ParentCard';
import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput';


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

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Checkbox */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <ParentCard title="Basic Header Form" footer={
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

       
        <form>
          <Grid container spacing={3} mb={3}>

            <Grid item lg={4} md={12} sm={12}>
              <CustomFormLabel htmlFor="fname-text">First Name</CustomFormLabel>
              <CustomTextField id="fname-text" placeholder="First name" variant="outlined" fullWidth />
              
              
              <CustomFormLabel htmlFor="standard-select-currency">Role</CustomFormLabel>
              
              
              <CustomSelect
                id="standard-select-currency"
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


            <Grid item lg={4} md={12} sm={12}>
              <CustomFormLabel htmlFor="lname-text">Last Name</CustomFormLabel>

              <CustomTextField id="lname-text" placeholder="Last Name" variant="outlined" fullWidth />
              
              <CustomFormLabel htmlFor="phone">Phone No</CustomFormLabel>

              <CustomTextField
                id="text"
                type="text"
                variant="outlined"
                placeholder="Phone No"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}

              />
            </Grid>

            <Grid item lg={4} md={12} sm={12}>


              <CustomFormLabel htmlFor="standard-select-currency">Select Gender</CustomFormLabel>
              
              
              <CustomSelect
                id="standard-select-currency"
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

              <CustomFormLabel htmlFor="date">Date of Birth</CustomFormLabel>

              <CustomTextField
                id="date"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}

              />
            </Grid>



          </Grid>
        
          <Grid container spacing={3} mb={3} mt={1}>



            <Grid item lg={4} md={12} sm={12} xs={12}>
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text"
              >
                Email
              </CustomFormLabel>
              <CustomTextField id="text" placeholder="Email id" variant="outlined" fullWidth />
            </Grid>

            <Grid item lg={4} md={12} sm={12} xs={12}>
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text"
              >
                Password
              </CustomFormLabel>
              <CustomOutlinedInput
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                    </IconButton>
                  </InputAdornment>
                }
                id="fs-pwd"
                placeholder="Password"
                fullWidth
              />
            </Grid>

            <Grid item lg={4} md={12} sm={12} xs={12}>
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text"
              >
                Conform Password
              </CustomFormLabel>
              <CustomOutlinedInput
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                    </IconButton>
                  </InputAdornment>
                }
                id="fs-pwd"
                placeholder="Conform Password"
                fullWidth
              />
            </Grid>

          </Grid>

        </form>

      </ParentCard>
    </div>
  );
};

export default FbBasicHeaderForm;
