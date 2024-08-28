import { Stack,Grid, InputAdornment, Button } from '@mui/material';

import React from 'react';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput';


const Msg91 = () => {
  return (
    <Grid container>
       
        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-text">
            Template id *
          </CustomFormLabel>
        </Grid>


        <Grid item xs={12}>
          <CustomTextField id="bl-message" placeholder="Template id *" fullWidth />
        </Grid>


        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-input">
          Auth key *
          </CustomFormLabel>
        </Grid>


        <Grid item xs={12}>
          <CustomTextField id="bl-message" placeholder="Auth key *" fullWidth />
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

export default Msg91;
