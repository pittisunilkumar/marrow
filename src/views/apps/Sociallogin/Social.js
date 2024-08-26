import React from 'react';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import { Grid, Typography } from '@mui/material';
import ParentCard from './ParentCard';

import GoogleLayout from './GoogleLayout';
import FacebookLayout from './FacebookLayout';
import BasicIcons from '../../../components/forms/form-vertical/BasicIcons';
import FormSeparator from '../../../components/forms/form-vertical/FormSeparator';
import CollapsibleForm from '../../../components/forms/form-vertical/CollapsibleForm';
import FormTabs from '../../../components/forms/form-vertical/FormTabs';
import AppleLayout from './AppleLayout';

export default function Social() {
  return (
    <PageContainer title="Social Login Setup" description="This is Social Login Setup Page">
      
      <Breadcrumb title="Social Login Setup" subtitle=""/>
    
      <Grid container spacing={3}>

        <Grid item xs={12} lg={6}>
          <ParentCard title="Google Login">
            <GoogleLayout />
          </ParentCard>
        </Grid>

        <Grid item xs={12} lg={6}>
          <ParentCard title="Facebook Login">
            <FacebookLayout />
          </ParentCard>
        </Grid>


        <Grid item xs={12} lg={6}>
          <ParentCard title="Apple Login">
            <AppleLayout />
          </ParentCard>
        </Grid>

      </Grid>
     
    </PageContainer>

    

  )
}
