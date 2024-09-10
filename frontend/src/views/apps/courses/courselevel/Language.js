import React from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from 'src/store/customizer/CustomizerSlice';
import { IconPencil, IconTrash } from '@tabler/icons';
import { Stack } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { IconDotsVertical } from '@tabler/icons';

const Languages = [
  {
    flagname: 'Edit',
    icon: <IconPencil size="1.1rem" />, // Render the icon directly
    value: 'en',
  },
  {
    flagname: 'Delete',
    icon: <IconTrash size="1.1rem" />, // Render the icon directly
    value: 'ch',
  },
];

const Language = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const customizer = useSelector((state) => state.customizer);
  const currentLang =
    Languages.find((_lang) => _lang.value === customizer.isLanguage) || Languages[1];
  const { i18n } = useTranslation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
  }, [customizer.isLanguage, i18n]);

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <IconDotsVertical size="1.1rem" />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiMenu-paper': {
            width: '200px',
          },
        }}
      >
        {Languages.map((option, index) => (
          <MenuItem
            key={index}
            sx={{ py: 2, px: 3 }}
            onClick={() => dispatch(setLanguage(option.value))}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              {option.icon} {/* Render the icon here */}
              <Typography> {option.flagname}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Language;
