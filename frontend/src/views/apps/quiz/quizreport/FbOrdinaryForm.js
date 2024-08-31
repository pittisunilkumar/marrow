import React from 'react';
import {
  FormControlLabel,
  Button,
  Grid,
  MenuItem,
} from '@mui/material';
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField';
import CustomCheckbox from '../../../../components/forms/theme-elements/CustomCheckbox';
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel';
import ParentCard from '../ParentCard';
import CustomSelect from '../../../../components/forms/theme-elements/CustomSelect';

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


const FbOrdinaryForm = () => {

  const [language, setLanguage] = React.useState('en');

  const handleChange3 = (event) => {
    setLanguage(event.target.value);
  };

  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <ParentCard title='Add Question Group'>
      
      <form>

        <Grid container spacing={3} mb={3} mt={1}>

          <Grid item lg={4} md={6} sm={6} xs={6}>

            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Category *
            </CustomFormLabel>

            <CustomSelect
              value={language}
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

          <Grid item lg={4} md={6} sm={6} xs={6}>

            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Course Type
            </CustomFormLabel>
            
            <CustomSelect
              value={language}
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
          
          <Grid item lg={4} md={6} sm={6} xs={6}>

            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="text"
            >
              Student Status
            </CustomFormLabel>
            
            <CustomSelect
              value={language}
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

        </Grid>
        
        <Button style={{marginTop:"10px"}} color="primary" variant="contained">
          Save
        </Button>

      </form>

    </ParentCard>
  );
};

export default FbOrdinaryForm;
