import React from 'react';
import { Button, Stack } from '@mui/material';
import {IconWand, IconTrash, IconSend } from '@tabler/icons';

const TextIconButtons = () => (
  <Stack spacing={1} direction="row" justifyContent="center">
    <Button color="primary" startIcon={<IconWand width={18} />}>
      Create Backup
    </Button>
    {/* <Button color="secondary" endIcon={<IconSend width={18} />}>
      Right Icon
    </Button> */}
  </Stack>
);

export default TextIconButtons;
