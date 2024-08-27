import React from 'react';
import { Box, Button, Grid, IconButton, InputAdornment, MenuItem, Stack, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// components
import BlankCard from '../../../components/shared/BlankCard';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import CustomTextField from  '../../../components/forms/theme-elements/CustomTextField';
import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput';
import { IconEye, IconEyeOff } from '@tabler/icons';
import FbBasicHeaderForm from './FbBasicHeaderForm';


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

const lang = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'fr',
    label: 'French',
  },
];

const FormTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   country
  const [country, setCountry] = React.useState('');

  const handleChange2 = (event) => {
    setCountry(event.target.value);
  };

  //   language
  const [language, setLanguage] = React.useState('en');

  const handleChange3 = (event) => {
    setLanguage(event.target.value);
  };

  //   password
  //
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //   confirm password
  //
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Layout */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <BlankCard>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: (theme) => theme.palette.divider }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable"
  scrollButtons="auto">
              <Tab label="Mail Config" value="1" />
              <Tab label="Test Mail" value="2" />
              
            </TabList>
          </Box>
          <TabPanel value="1">

            <FbBasicHeaderForm />

          </TabPanel>
          <TabPanel value="2">

            <Grid container spacing={3}>
              
              <Grid item xs={12} lg={6}>
                <Grid container spacing={3}>


                  <Grid item xs={12} sm={3} display="flex" alignItems="center">
                    <CustomFormLabel htmlFor="ft-uname" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                      Email
                    </CustomFormLabel>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <CustomTextField id="ft-uname" placeholder="Ex:-gmail@gmail.com" fullWidth />
                  </Grid>
                  
                  
                  
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3}></Grid>
              <Grid item xs={12} sm={9}>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="primary">
                    Send
                  </Button>
                  
                </Stack>
              </Grid>
            </Grid>

          </TabPanel>
          
        </TabContext>
      </BlankCard>
    </div>
  );
};

export default FormTabs;
