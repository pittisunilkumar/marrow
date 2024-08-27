import React from 'react';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import { Grid, Typography } from '@mui/material';
import ParentCard from './ParentCard';

import Twilio from './Twilio';
import Twofactor from './Twofactor';
import BasicIcons from '../../../components/forms/form-vertical/BasicIcons';
import FormSeparator from '../../../components/forms/form-vertical/FormSeparator';
import CollapsibleForm from '../../../components/forms/form-vertical/CollapsibleForm';
import FormTabs from '../../../components/forms/form-vertical/FormTabs';
import Msg91 from './Msg91';
import Nexmo from './Nexmo';

export default function SmsSetting() {
  return (
      
    <PageContainer title="Sms Setting" description="This is Sms Setting Page">
      
      <Breadcrumb title="Sms Setting" subtitle=""/>
    
      <Grid container spacing={3}>

        <Grid item xs={12} lg={6}>
          <ParentCard title="Twilio">
            <Twilio />
          </ParentCard>
        </Grid>

        <Grid item xs={12} lg={6}>
          <ParentCard title="2Factor">
            <Twofactor />
          </ParentCard>
        </Grid>


        <Grid item xs={12} lg={6}>
          <ParentCard title="Msg91">
            <Msg91 />
          </ParentCard>
        </Grid>

        <Grid item xs={12} lg={6}>
          <ParentCard title="Nexmo">
            <Nexmo />
          </ParentCard>
        </Grid>

      </Grid>
     
    </PageContainer>

  )
}
