import React from 'react'
import { Grid, Typography } from '@mui/material';

import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import FbBasicHeaderForm from './FbBasicHeaderForm';

export default function Emailsetting() {
  return (
    <PageContainer title="Email Setting" description="this is Email Setting page">
    <Breadcrumb title="Email Setting" subtitle=""/>

    <Grid container spacing={3}>
      
      <Grid item lg={12} md={12} xs={12}>
        <FbBasicHeaderForm />
      </Grid>
      
    </Grid>

    </PageContainer>
  )
}
