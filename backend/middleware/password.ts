const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const checkpass = (pass) => {
  if (pass.match(passRegex)) return pass
  else throw new Error('Le mot de passe ne correspond pas au format requis !')
}