import React from 'react'
import HeaderNav from '@/components/HeaderNav/HeaderNav'
import { Layout } from 'antd'
const { Footer, Sider, Content } = Layout

type Props= {
	children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
	return (
		<Layout>
			<HeaderNav />
			<Layout>
				{/* <Sider>Sider</Sider> */}
				<Content>{children}</Content>
			</Layout>
			<Footer>Footer</Footer>
		</Layout>
	)
}
export default AdminLayout
