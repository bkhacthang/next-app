import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/utils/mongodb'
// import jwt from 'jsonwebtoken'
import { generateJWT } from '@/utils/helper'

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
	// if (!req.body) {
	// 	res.statusCode = 404
	// 	res.end('Error')
	// 	return
	// }
	// const { email, password } = req.body
	const { db } = await connectToDatabase()
	const data = await db.collection('users').find({}, { password: 0, _id: 0 }).toArray()
	console.log(data)
	const JWTData = generateJWT(JSON.stringify(data))
	console.log(JWTData)
	res.status(200).json({ token: JWTData })
}

export default Login
