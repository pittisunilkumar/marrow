import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Box,
  FormControlLabel,
  Button,
} from '@mui/material';
import { SliderThumb } from '@mui/material/Slider';


import { IconShoppingCart, IconX } from '@tabler/icons';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import CustomSlider from '../../../components/forms/theme-elements/CustomSlider';
import CustomRangeSlider from '../../../components/forms/theme-elements/CustomRangeSlider';
import CustomSwitch from '../../../components/forms/theme-elements/CustomSwitch';
import CustomDisabledButton from '../../../components/forms/theme-elements/CustomDisabledButton';
import CustomOutlinedButton from '../../../components/forms/theme-elements/CustomOutlinedButton';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import CustomRadio from '../../../components/forms/theme-elements/CustomRadio';
import ParentCard from './ParentCard';
import { Stack } from '@mui/system';
import { useSelector } from 'react-redux';
import { Typography, Badge, Drawer, IconButton} from '@mui/material';


const CustomThumbComponent = (props) => {
  const { children, ...other } = props;
  
  return (
    <SliderThumb {...other}>
      {children}
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
        }}
      />
      <Box
        sx={{
          height: '14px',
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
    </SliderThumb>
  );
};

CustomThumbComponent.propTypes = {
  children: PropTypes.node,
};

const FormCustom = () => {
  const Cartproduct = useSelector((state) => state.ecommerceReducer.cart);
  const bcount = Cartproduct.length > 0 ? Cartproduct.length : '0';

  const [age, setAge] = React.useState('1');
  const [select1, setSelect] = React.useState('1');
  const [select2, setSelect2] = React.useState('1');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange4 = (event2) => {
    setSelect(event2.target.value);
  };

  const handleChange5 = (event3) => {
    setSelect2(event3.target.value);
  };

  const [value, setValue] = React.useState(null);
  const [value2, setValue2] = React.useState(null);

  const [value3, setValue3] = React.useState(30);
  const handleChange6 = (event, newValue) => {
    setValue3(newValue);
  };
  return (
    

      <ParentCard title="Custom Form">
        <Grid container spacing={3}>

          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>

          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>

              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>

              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            

              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>

          <Grid item xs={12} sm={12} lg={12}>
            

              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>


                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            
              <Grid container>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel 
                    control={<CustomCheckbox />} 
                    label="Enter text" 
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox/>}
                    label="Enter text"
                  />
                  <Badge color="error" badgeContent={bcount}>
                  </Badge>
                </Grid>


              </Grid>

          </Grid>






          <Grid item xs={12} sm={12} lg={12}>
            
            {/* button */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" mt={2}>
              
              <Stack spacing={1} direction="row">
                {/* <Button
                  variant="contained"
                  color="primary">
                  Add New
                </Button>
                <CustomDisabledButton
                  variant="contained"
                  disabled>
                  Add New
                </CustomDisabledButton>
                <CustomOutlinedButton
                  variant="outlined">
                  Add New
                </CustomOutlinedButton> */}
              </Stack>

              <Stack direction="row" spacing={1}>
                <Button
                  variant="contained"
                  color="primary">
                  Clean
                </Button>
              </Stack>

            </Stack>


          </Grid>


        </Grid>
      </ParentCard>

  );
};

export default FormCustom;
