import { Stack,Grid, InputAdornment, Button,MenuItem } from '@mui/material';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import {
  Box,
  Typography,
  Avatar,
  CardMedia,
  styled,
  Fab,
  Skeleton,
} from '@mui/material';
import userimg from 'src/assets/images/profile/user-1.jpg';

import React from 'react';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput';

const lang = [
  {
    value: 'test',
    label: 'Test',
  },
  {
    value: 'live',
    label: 'Live',
  },
];


const Razorpay = () => {
  const ProfileImage = styled(Box)(() => ({
    backgroundImage: 'linear-gradient(#50b2fc,#f44c66)',
    borderRadius: '50%',
    width: '110px',
    height: '110px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  }));

  const [status, setStatus] = React.useState('en');
  const handleChange3 = (event) => {
    setStatus(event.target.value);
  };
  
  return (
      <Grid container>

        <ProfileImage>
          <Avatar
            src=""
            alt=""
            sx={{
              borderRadius: '50%',
              width: '100px',
              height: '100px',
              border: '4px solid #fff',
            }}
          />
        </ProfileImage>

        <Grid item xs={12}>
          <CustomFormLabel htmlFor="ft-lang">Status</CustomFormLabel>
        </Grid>
        <Grid item xs={12}>
          <CustomSelect
            value={status}
            onChange={handleChange3}
            fullWidth
            variant="outlined"
          >
            {lang.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomSelect>
        </Grid>
       
        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-text">
            Api Key *
          </CustomFormLabel>
        </Grid>


        <Grid item xs={12}>
          <CustomTextField id="bl-message" placeholder="Api key *" fullWidth />
        </Grid>

        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-input">
          Api Secret *
          </CustomFormLabel>
        </Grid>


        <Grid item xs={12}>
          <CustomTextField id="bl-message" placeholder="Api Secret *" fullWidth />
        </Grid>


        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-input">
          Payment gateway Title *
          </CustomFormLabel>
        </Grid>


        <Grid item xs={12}>
          <CustomTextField id="bl-message" value="razorpay" disabled placeholder="Payment gateway Title *" fullWidth />
        </Grid>
        

        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-message">
          Choose Logo
          </CustomFormLabel>
        </Grid>


        <Grid item xs={12}>
          <CustomTextField id="bl-message" type="file" fullWidth />
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

export default Razorpay;
