import React from 'react';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import FormCustom from './FormCustom';

function CleanDatabase() {
  return (
    
    <PageContainer title="Backup" description="this is Database Backup page">
        <Breadcrumb title="Database Backup" subtitle=""/>

        <FormCustom/>

          {/* <Grid item xs={12} sm={12} lg={4}>
            <CustomFormLabel htmlFor="disabled">Industry Type</CustomFormLabel>
            <CustomTextField
              id="disabled"
              placeholder="Disabled filled"
              variant="outlined"
              fullWidth
              disabled
              size="small"
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: (theme) =>
                    `${theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.12) !important'
                      : '#dee3e9 !important'
                    }`,
                },
              }}
            />
            <CustomFormLabel htmlFor="date">Date</CustomFormLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <CustomTextField {...props} fullWidth size="small" sx={{
                  '& .MuiSvgIcon-root': {
                    width: 18,
                    height: 18,
                  },
                  '& .MuiFormHelperText-root': {
                    display: 'none',
                  },
                }} />}
                placeholder="DateTimePicker"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
          </Grid> */}
        
    </PageContainer>


  )
}

export default CleanDatabase
