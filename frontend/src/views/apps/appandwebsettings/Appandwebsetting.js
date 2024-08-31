import React from 'react';

import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from './ParentCard';
import { Grid, Typography } from '@mui/material';

import Appleinstructor from './Appleinstructor';
import Androiduserapp from './Androiduserapp';
import BasicIcons from '../../../components/forms/form-vertical/BasicIcons';
import FormSeparator from '../../../components/forms/form-vertical/FormSeparator';
import CollapsibleForm from '../../../components/forms/form-vertical/CollapsibleForm';
import FormTabs from '../../../components/forms/form-vertical/FormTabs';
import Appleuserapp from './Appleuserapp';
import Androidinstructor from './Androidinstructor';


function Appandwebsetting() {
  return (
    <PageContainer title="App and Web setting" description="This is App and Web setting page">
        <Breadcrumb title="App and Web setting" subtitle=""/>


        <Grid container spacing={3}>

            <Grid item xs={12} lg={6}>
                <ParentCard title="For IOS User App">
                    <Androiduserapp />
                </ParentCard>
            </Grid>

            <Grid item xs={12} lg={6}>
                <ParentCard title="For Android User App">
                    <Appleuserapp />
                </ParentCard>
            </Grid>


            <Grid item xs={12} lg={6}>
                <ParentCard title="For Android Instructor App">
                    <Androidinstructor />
                </ParentCard>
            </Grid>

            <Grid item xs={12} lg={6}>
                <ParentCard title="For IOS Instructor App">
                    <Appleinstructor />
                </ParentCard>
            </Grid>

        </Grid>



    </PageContainer>

  )
}

export default Appandwebsetting
