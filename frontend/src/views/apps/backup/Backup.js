import React from 'react';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import ProductTableList from './ProductTableList';
import ParentCard from './ParentCard';

export default function Backup() {
  return (
    <PageContainer title="Backup" description="this is Database Backup page">
        <Breadcrumb title="Database Backup" subtitle=""/>
        <ParentCard title="Backup History"  />
        <ProductTableList/>
    </PageContainer>

  )
}
