//TODO: https://www.npmjs.com/package/crypto-js
//TODO https://cryptojs.gitbook.io/docs/
import * as CryptoJS from 'crypto-js'

export const key = CryptoJS.enc.Hex.parse(`${process.env.CRYPTO_KEY}`)
export const iv = CryptoJS.enc.Hex.parse(`${process.env.CRYPTO_IV}`)

export const encrypt = (string, key, iv) => {
  return CryptoJS.AES.encrypt(string, key, {iv: iv}).toString()
}

export const decrypt = (encryptedString, key, iv) => {
  return CryptoJS.AES.decrypt(encryptedString, key, {iv: iv}).toString(CryptoJS.enc.Utf8)
}