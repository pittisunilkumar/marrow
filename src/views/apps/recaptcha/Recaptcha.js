import React from 'react'

import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';

export default function Recaptcha() {
  return (
    <PageContainer title="Email Setting" description="This is Email Setting page">
      {/* breadcrumb */}
      <Breadcrumb title="Email Setting" subtitle=""/>
    </PageContainer>
  )
}


