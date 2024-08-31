import React from 'react'
import PageContainer from '../../../../components/container/PageContainer';
import Breadcrumb from '../Breadcrumb';
import FbOrdinaryForm from './FbOrdinaryForm';
import ProductTableList from './ProductTableList';

function Quizreport() {
  return (
    <PageContainer title="Quiz Report" description="This is Quiz Report Page">
      <Breadcrumb title="Quiz Report" subtitle=""/>

      <FbOrdinaryForm/>
      <ProductTableList/>

    </PageContainer>
  )
}

export default Quizreport
