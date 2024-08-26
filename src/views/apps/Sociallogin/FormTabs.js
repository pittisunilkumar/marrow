import React from 'react';
import { Box, Button, Grid, IconButton, InputAdornment, MenuItem, Stack, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// components
import BlankCard from '../../../components/shared/BlankCard';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import { IconEye, IconEyeOff } from '@tabler/icons';

import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput';


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
              <Tab label="Social Links" value="1" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <Grid container>
                  <Grid item xs={12}>
                    <CustomFormLabel htmlFor="ft-twitter" sx={{ mt: 0 }}>
                      Twitter
                    </CustomFormLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField
                      id="ft-twitter"
                      placeholder="https://twitter.com/abc"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomFormLabel htmlFor="ft-google">Google</CustomFormLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField
                      id="ft-google"
                      placeholder="https://plus.google.com/abc"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomFormLabel htmlFor="ft-insta">Instagram</CustomFormLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField
                      id="ft-insta"
                      placeholder="https://instagram.com/abc"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Grid container>
                  <Grid item xs={12}>
                    <CustomFormLabel htmlFor="ft-fb" sx={{ mt: { sm: 0 } }}>
                      Facebook
                    </CustomFormLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField id="ft-fb" placeholder="https://facebook.com/abc" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomFormLabel htmlFor="ft-linkedin">Linkedin</CustomFormLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField
                      id="ft-linkedin"
                      placeholder="https://linkedin.com/abc"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomFormLabel htmlFor="ft-quora">Quora</CustomFormLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField id="ft-quora" placeholder="https://quora.com/abc" fullWidth />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
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
