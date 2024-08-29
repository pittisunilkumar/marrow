import React from 'react';
import {
  FormControlLabel,
  Button,
} from '@mui/material';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import ParentCard from './ParentCard';

const FbOrdinaryForm = () => {
  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <ParentCard title='Ordrinary Form'>
      <form>
        <CustomFormLabel
          sx={{
            mt: 0,
          }}
          htmlFor="email-address"
        >
          Role Name(Default) *
        </CustomFormLabel>
        <CustomTextField
          id="email-address"
          variant="outlined"
          placeholder="Role Name *"
          fullWidth
        />
   
        <Button style={{marginTop:"10px"}} color="primary" variant="contained">
          Add
        </Button>

      </form>
    </ParentCard>
  );
};

export default FbOrdinaryForm;
