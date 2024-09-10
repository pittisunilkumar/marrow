import React from 'react';
import PageContainer from '../../../../components/container/PageContainer';
import Breadcrumb from '../Breadcrumb';
import FbBasicHeaderForm from './FbBasicHeaderForm';
import ProductTableList from './ProductTableList';

function Allcourses() {
  return (
    <PageContainer title="All Courses" description="This is All Courses Page">
      <Breadcrumb title="All Courses" subtitle=""/>
      <FbBasicHeaderForm/>
      <ProductTableList/>
    </PageContainer>
  )
}

export default Allcourses
