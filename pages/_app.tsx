import React from 'react'
import '@/assets/css/globals.scss'
import 'antd/dist/antd.css'
// import MainLayout from '@/assets/css/layout/MainLayout'
import LayoutWraper from '@/layout/LayoutWraper'
import type { AppProps /*, AppContext */ } from 'next/app'
function MyApp({ Component, pageProps } : AppProps) {
	return (
		<LayoutWraper>
			<Component {...pageProps} />
		</LayoutWraper>
	)
}

export default MyApp
