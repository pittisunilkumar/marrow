import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, Divider, Box,Radio } from '@mui/material';
import { RadioGroup, FormControlLabel  } from '@mui/material';

import CustomRadio from "../../../components/forms/theme-elements/CustomRadio"


import { useSelector } from 'react-redux';
import { MoreVert } from '@mui/icons-material'; // or any other icon you prefer

const ParentCard = ({ title, children, footer, onButtonClick }) => {
  const customizer = useSelector((state) => state.customizer);

  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange2 = (event) => {
      setSelectedValue(event.target.value);
  };
  
  const controlProps = (item) => ({
      checked: selectedValue === item,
      onChange: handleChange2,
      value: item,
      name: 'size-radio-button-demo',
      inputProps: { 'aria-label': item },
  });

  return (
    <Card
      sx={{ padding: 0 }}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >
      <CardHeader
        title={title}
        action={
          <Box textAlign="center">
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel 
                  value="active" 
                  control={<CustomRadio />} 
                  label="Active" 
                  labelPlacement="Start" 
                />
                <FormControlLabel
                  value="deactive"
                  control={<CustomRadio />}
                  label="Deactive"
                  checked="true"
                  labelPlacement="Start"
                />
                
              </RadioGroup>

          </Box>
        }
      />
      <Divider />

      <CardContent>{children}</CardContent>
      {footer ? (
        <>
          <Divider />
          <Box p={3}>{footer}</Box>
        </>
      ) : (
        ''
      )}
    </Card>
  );
};

ParentCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  footer: PropTypes.node,
  onButtonClick: PropTypes.func, // Optional function for button click
};

export default ParentCard;
