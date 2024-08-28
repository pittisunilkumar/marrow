import React from 'react';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import FbBasicHeaderForm from './FbBasicHeaderForm';

export default function General() {
  return (
    <PageContainer title="General Setting" description="This is General Setting Page">
      <Breadcrumb title="General Setting" subtitle=""/>
      <FbBasicHeaderForm/>
    </PageContainer>
  )
}


          

