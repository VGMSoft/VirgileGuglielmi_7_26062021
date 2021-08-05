//TODO: https://www.npmjs.com/package/crypto-js


import * as CryptoJS from 'crypto-js'

export const encrypt = (string, key) => {
  return CryptoJS.AES.encrypt(string, key).toString()
}

export const decrypt = (encryptedString, key) => {
  return CryptoJS.AES.decrypt( encryptedString, key).toString(CryptoJS.enc.Utf8)
}

export const encryptObject = (object, key) => {
  return CryptoJS.AES.encrypt( key, JSON.stringify(object)).toString()
}

export const decryptObject = (encryptedObject, key) => {
  return JSON.parse(CryptoJS.AES.decrypt( key, encryptedObject).toString(CryptoJS.enc.Utf8))
}


