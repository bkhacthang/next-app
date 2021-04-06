export const validateRegister = (
  name: string,
  email: string,
  password: string,
  cf_password: string
) => {
  if (!name || !email || !password) {
    return 'Please fill all the field.'
  }
  if (!validateEmail(email)) {
    return 'Invalid email.'
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters.'
  }
  if (!validatePassword(password)) {
    return 'Password must be at least a number, and at least a special character.'
  }
  if (password !== cf_password) {
    return 'Confirm password not match your password'
  }
}

function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function validatePassword(password: string) {
  var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/
  return regularExpression.test(password)
}
