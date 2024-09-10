import React from 'react';
import PageContainer from '../../../../components/container/PageContainer';
import Breadcrumb from '../Breadcrumb';
import ProductTableList from './ProductTableList';
import FbBasicHeaderForm from './FbBasicHeaderForm';

function Courselevel() {
  return (
    <PageContainer title="Course Level" description="This is Course Level Page">
      <Breadcrumb title="Course Level" subtitle=""/>
        <FbBasicHeaderForm/>
        <ProductTableList/>
    </PageContainer>
  )
}

export default Courselevel




