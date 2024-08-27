import React from 'react'

import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import FbBasicHeaderForm from './FbBasicHeaderForm';

export default function Recaptcha() {
  return (
    <PageContainer title="Recaptcha Setting" description="This is Recaptcha Setting page">
      {/* breadcrumb */}
      <Breadcrumb title="Recaptcha Setting" subtitle=""/>

      <FbBasicHeaderForm/>

    </PageContainer>
  )
}


