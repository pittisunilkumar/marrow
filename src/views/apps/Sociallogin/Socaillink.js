import React from 'react';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import FormTabs from './FormTabs';
import { Grid, Typography } from '@mui/material';


export default function Socaillink() {
  return (
    
      <PageContainer title="Social Media Links" description="This is Social Media Links Page">
      
        <Breadcrumb title="Social Media Links" subtitle=""/>

        <Grid item xs={12}>
          <Typography variant="h5" mb={3}>Form with Tabs</Typography>
          <FormTabs />
        </Grid>

      </PageContainer>
    
  )
}
