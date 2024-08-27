import React from 'react';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import { Grid, Typography } from '@mui/material';
import ParentCard from './ParentCard';

import Razorpay from './Razorpay';
import Paytm from './Paytm';
import BasicIcons from '../../../components/forms/form-vertical/BasicIcons';
import FormSeparator from '../../../components/forms/form-vertical/FormSeparator';
import CollapsibleForm from '../../../components/forms/form-vertical/CollapsibleForm';
import FormTabs from '../../../components/forms/form-vertical/FormTabs';
import Stripe from './Stripe';


export default function Payment() {
  return (
        
    <PageContainer title="Payment Configuration" description="This is Payment Configuration Page">
      
      <Breadcrumb title="Payment Configuration" subtitle=""/>
    
      <Grid container spacing={3}>

        <Grid item xs={12} lg={6}>
          <ParentCard title="RAZOR PAY">
            <Razorpay />
          </ParentCard>
        </Grid>

        <Grid item xs={12} lg={6}>
          <ParentCard title="PAYTM">
            <Paytm />
          </ParentCard>
        </Grid>

        <Grid item xs={12} lg={6}>
          <ParentCard title="STRIPE">
            <Stripe />
          </ParentCard>
        </Grid>

      </Grid>
     
    </PageContainer>

    
  )
}




