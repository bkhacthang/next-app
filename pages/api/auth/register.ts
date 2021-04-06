import type { NextApiRequest, NextApiResponse } from 'next'
import connectDb from '@/utils/connectDb'
import { validateRegister } from '@/utils/validation'
import bcrypt from 'bcrypt'
import Users from '@/model/userModel'
import { commonRes } from '@/utils/common'

connectDb()
const Register = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      await registerAction(req, res)
      break
  }
}

export default Register

const registerAction = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, password, cf_password } = req.body
    const errMsg = validateRegister(name, email, password, cf_password)
    if (errMsg) {
      return res.status(400).json(commonRes(false, errMsg))
    }
    const bcryptPassword = await bcrypt.hash(password, 12)
    const newUser = new Users({ name, email, password: bcryptPassword })
    await newUser.save()
    res.json(
      commonRes(true, {
        msg: 'Create success!',
      })
    )
  } catch (err) {
    return res.status(500).json(commonRes(true, { error: err.message }))
  }
}
