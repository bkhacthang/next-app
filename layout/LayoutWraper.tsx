import AdminLayout from '@/layout/AdminLayout'
import DefaultLayout from '@/layout/DefaultLayout'
import React, { Children } from 'react'

const DEFAULT_LAYOUT = 'default'
// const ADMIN_LAYOUT = 'admin'

interface ILayoutData {
  [name:string] : React.ReactNode
}


type PropsState = {
  layout?: string | 'default',
  children: React.ReactNode,
}

const LayoutWraper = (props: PropsState) => {
  if(props.layout === DEFAULT_LAYOUT){
    return (
      <DefaultLayout {...props}>{props.children}</DefaultLayout>
    )
  }else {
    
    return (
      <AdminLayout {...props}>{props.children}</AdminLayout>
    )
  }
}

export default LayoutWraper