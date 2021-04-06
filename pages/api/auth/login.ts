import type { NextApiRequest, NextApiResponse } from 'next'
import connectDb from '@/utils/connectDb'
// import { connectToDatabase } from '@/utils/mongodb'
// import jwt from 'jsonwebtoken'
import { generateJWT } from '@/utils/helper'
connectDb()
const Login = async (req: NextApiRequest, res: NextApiResponse) => {
	// if (!req.body) {
	// 	res.statusCode = 404
	// 	res.end('Error')
	// 	return
	// }
	// const { email, password } = req.body
	// const { db } = await connectToDatabase()
	// const data = await db.collection('users').find({}, { password: 0, _id: 0 }).toArray()
	// console.log(data)
	// const JWTData = generateJWT(JSON.stringify(data))
	// console.log(JWTData)
	// res.status(200).json({ token: JWTData })

	switch(req.method){
		case "POST": 
			await loginAction(req, res);
			break;
	}
}

export default Login

const loginAction = async (req: NextApiRequest, res: NextApiResponse) => {
	
}