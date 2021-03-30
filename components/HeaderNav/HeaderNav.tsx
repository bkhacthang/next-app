import { Layout, Menu } from 'antd'
import styles from './HeaderNav.module.scss'
import React from 'react'
const { Header } = Layout
const HeaderNav = () => {
	return (
		<Header
			className={styles['header-page']}
			style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
			<div className={styles.logo}>ChickenShop</div>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
				<Menu.Item key="1">nav 1</Menu.Item>
				<Menu.Item key="2">nav 2</Menu.Item>
				<Menu.Item key="3">nav 3</Menu.Item>
			</Menu>
		</Header>
	)
}

export default HeaderNav
