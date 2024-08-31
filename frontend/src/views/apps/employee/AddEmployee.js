import React from 'react'
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from './Breadcrumb';
import FbBasicHeaderForm from './FbBasicHeaderForm';
function AddEmployee() {
  return (
    <PageContainer title="Add Employee" description="This is Add Employee Page">
      
        <Breadcrumb title="Add Employee" subtitle=""/>
        <FbBasicHeaderForm/>
     
    </PageContainer>
  )
}

export default AddEmployee
