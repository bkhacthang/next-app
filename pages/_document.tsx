import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MainDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="Hello world with Nextjs" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MainDocument
