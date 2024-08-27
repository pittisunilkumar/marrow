import { Stack,Grid, InputAdornment, Button } from '@mui/material';

import React from 'react';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput';


const Twilio = () => {
  return (
      <Grid container>
       
        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-text">
            Sid *
          </CustomFormLabel>
        </Grid>


        <Grid item xs={12}>
          <CustomTextField id="bl-message" placeholder="Sid *" fullWidth />
        </Grid>


        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-input">
          Messaging Service sid *
          </CustomFormLabel>
        </Grid>


        <Grid item xs={12}>
          <CustomTextField id="bl-message" placeholder="Messaging Service sid *" fullWidth />
        </Grid>
        

        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-message">
            Token *
          </CustomFormLabel>
        </Grid>


        <Grid item xs={12}>
          <CustomTextField id="bl-message" placeholder="Token *" fullWidth />
        </Grid>

        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-message">
            From *
          </CustomFormLabel>
        </Grid>


        <Grid item xs={12}>
          <CustomTextField id="bl-message" placeholder="From *" fullWidth />
        </Grid>

        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-message">
            OTP Template *
          </CustomFormLabel>
        </Grid>


        <Grid item xs={12}>
          <CustomTextField id="bl-message" placeholder="Your otp is #OTP#." fullWidth />
        </Grid>



        <Grid item xs={12} style={{marginTop:'20px'}}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary">
              Save
            </Button>
            
          </Stack>
        </Grid>




      </Grid>
  );
};

export default Twilio;
