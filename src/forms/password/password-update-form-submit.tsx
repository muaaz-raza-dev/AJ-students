import RequestLoading from '@/components/Loader/request-loading'
import { Button } from '@/shadcn/components/ui/button'
import React from 'react'

const PasswordUpdateFormSubmit = ({isUpdating}:{isUpdating:boolean;}) => {
  return (
        
<Button disabled={isUpdating} type="submit" className='my-4'>
    {
        isUpdating?
        <RequestLoading size="16" stroke="2"/>:
    "Update"
    }
</Button>
  )
}

export default PasswordUpdateFormSubmit