import React from 'react';
import PageContainer from '../../../../components/container/PageContainer';
import Breadcrumb from '../Breadcrumb';
import { Grid, Typography } from '@mui/material';
import FbOrdinaryForm from '../addquizgroup/FbOrdinaryForm';
import ProductTableList from '../addquizgroup/ProductTableList';

export default function Quizgroup() {
  return (
    <PageContainer title="Quiz Group" description="This is Quiz Group Page">
      
      <Breadcrumb title="Quiz Group" subtitle=""/>

      <FbOrdinaryForm/>
      <ProductTableList/>

    </PageContainer>
  )
}
