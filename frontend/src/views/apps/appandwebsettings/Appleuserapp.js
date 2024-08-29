import { Stack,Grid, InputAdornment, Button } from '@mui/material';

import React from 'react';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput';


const Appleuserapp = () => {
  return (
    <Grid container>
       
        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-text">
            Minimum User App Version for Force Update (Ios)
          </CustomFormLabel>
        </Grid>


        <Grid item xs={12}>
          <CustomTextField id="bl-message" placeholder="Version code" fullWidth />
        </Grid>


        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-input">
            Download URL for User App (Ios)

          </CustomFormLabel>
        </Grid>


        <Grid item xs={12}>
          <CustomTextField id="bl-message" placeholder="User App Url" fullWidth />
        </Grid>
        


        <Grid item xs={12} style={{marginTop:'20px'}}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary">
              Save
            </Button>
            <Button variant="text" color="error">
              Reset
            </Button>
          </Stack>
        </Grid>




      </Grid>
  );
};

export default Appleuserapp;
