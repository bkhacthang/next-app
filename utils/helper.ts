import getConfig from 'next/config'
import jwt from 'jsonwebtoken'

const { serverRuntimeConfig } = getConfig()
const { JWT_KEY } = serverRuntimeConfig

export const getKeyJWT = () => {
	return JWT_KEY
}

export const generateJWT = (data: any) => {
	return jwt.sign(data, getKeyJWT())
}
