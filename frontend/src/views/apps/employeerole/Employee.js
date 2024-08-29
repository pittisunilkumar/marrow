import React from 'react';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from './Breadcrumb';
import { Grid, Typography } from '@mui/material';
import FbOrdinaryForm from './FbOrdinaryForm';
import ProductTableList from './ProductTableList';

export default function employee() {
  return (
    <PageContainer title="Employee Role" description="This is Employee Role Page">
      
      <Breadcrumb title="Employee Role" subtitle=""/>

      <FbOrdinaryForm/>
      <ProductTableList/>

    </PageContainer>
  )
}
