import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, Divider, Box, IconButton } from '@mui/material';
import { Switch, FormGroup, FormControlLabel } from '@mui/material';

import { useSelector } from 'react-redux';
import { MoreVert } from '@mui/icons-material'; // or any other icon you prefer

const ParentCard = ({ title, children, footer, onButtonClick }) => {
  const customizer = useSelector((state) => state.customizer);

  return (
    <Card
      sx={{ padding: 0 }}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >
      <CardHeader
        title={title}
        // action={
        //   <FormControlLabel control={<Switch />} label="" />
        // }
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
