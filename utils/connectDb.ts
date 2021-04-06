import mongoose from 'mongoose'

import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()
const { MONGODB_URI, MONGODB_DB } = serverRuntimeConfig

const connectDb = () => {
	if (mongoose.connections[0].readyState) {
		console.log('Already connected db')
		return
	}
	const sourceConnectDb = `${MONGODB_URI}/${MONGODB_DB}`
	mongoose.connect(
		sourceConnectDb,
		{
			useCreateIndex: true,
			useFindAndModify: false,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		(error) => {
			if (error) throw error
			console.log('Connected to mongodb')
		}
	)
}

export default connectDb
