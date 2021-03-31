import AdminLayout from '@/layout/AdminLayout'
import DefaultLayout from '@/layout/DefaultLayout'
import React, { Children } from 'react'

const ADMIN_LAYOUT = 'admin'


type PropsState = {
  children: any
}

const LayoutWraper = (props: PropsState) => {
  if (props.children.type.layout === ADMIN_LAYOUT) {
    return <AdminLayout {...props}>{props.children}</AdminLayout>
  } else {
    return <DefaultLayout {...props}>{props.children}</DefaultLayout>
  }
}

export default LayoutWraper
