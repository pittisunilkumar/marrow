import React from 'react';
import FormTabs from './FormTabs';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';

export default function Firebase() {
  return (
    <PageContainer title="Firebase Push Notification Setup" description="this is Firebase Push Notification Setup page">
        <Breadcrumb title="Firebase Push Notification Setup" subtitle=""/>
        <FormTabs/>
    </PageContainer>
  )
}



