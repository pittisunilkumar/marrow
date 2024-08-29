import React from 'react'
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from './Breadcrumb';
import ProductTableList from './ProductTableList';
function EmployeeList() {
  return (
    <PageContainer title="Employee List" description="This is Employee List Page">
      
    <Breadcrumb title="Employee List" subtitle=""/>
      <ProductTableList/>
    </PageContainer>


  )
}

export default EmployeeList
