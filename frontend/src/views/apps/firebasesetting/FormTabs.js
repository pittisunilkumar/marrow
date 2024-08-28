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
            <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable" scrollButtons="auto">
              <Tab label="Personal Info" value="1" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Grid container spacing={3} mb={3} mt={1}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                  
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text"
                  >
                    Server Key *
                  </CustomFormLabel>
                  <CustomTextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    placeholder ="Server key *"
                    variant="outlined"
                    fullWidth
                  />

            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text"
              >
                Api Key *
              </CustomFormLabel>

              <CustomTextField id="text" placeholder="Api key *" variant="outlined" fullWidth />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={6}>
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text"
              >
                FCM Project ID *
              </CustomFormLabel>
              <CustomTextField id="text" placeholder="FCM Project ID" variant="outlined" fullWidth />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={6}>
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text"
              >
                Auth Domain
              </CustomFormLabel>
              <CustomTextField id="text" placeholder="Auth Domain" variant="outlined" fullWidth />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={6}>
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text"
              >
                Storage Bucket *
              </CustomFormLabel>
              <CustomTextField id="text" placeholder="Storage Bucket *" variant="outlined" fullWidth />
            </Grid>

            

            <Grid item lg={4} md={6} sm={6} xs={6}>
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text"
              >
                Messaging Senderid
              </CustomFormLabel>
              <CustomTextField id="text" placeholder="Messageing Senderid" variant="outlined" fullWidth />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={6}>
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text"
              >
                App Id *
              </CustomFormLabel>
              <CustomTextField id="text" placeholder="App Id *" variant="outlined" fullWidth />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={6}>
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text"
              >
                Measurement Id *
              </CustomFormLabel>
              <CustomTextField id="text" placeholder="Measurement Id *" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12} sm={9}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="primary">
                  Submit
                </Button>
                <Button variant="text" color="error">
                  Cancel
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
