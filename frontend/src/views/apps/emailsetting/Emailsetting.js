import React from 'react'
import { Grid, Typography } from '@mui/material';

import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import FbBasicHeaderForm from './FbBasicHeaderForm';
import FormTabs from './FormTabs';

export default function Emailsetting() {
  return (
    <PageContainer title="Email Config" description="this is Email Config page">
    <Breadcrumb title="Email Config" subtitle=""/>

    <FormTabs/>

    </PageContainer>
  )
}
