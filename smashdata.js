import crypto from 'node:crypto'
const separator = "::"

export const encrypt = (seed, string) => {
  const key = crypto.createHash("sha256").update(seed).digest("hex").slice(16, 48)
  const rando = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv('aes-256-cbc', key, rando)
  let encryptedString = cipher.update(string)
  encryptedString = Buffer.concat([encryptedString, cipher.final()])
  return rando.toString('hex') + separator + encryptedString.toString('hex')
}

export const decrypt = (seed, string) => {
  const key = crypto.createHash("sha256").update(seed).digest("hex").slice(16, 48)
  try {
    const split = string.split(separator)
    const iv = Buffer.from(split[0], 'hex')
    split.shift()
    const encryptedText = Buffer.from(split.join(separator), 'hex')
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
    let decrypted = decipher.update(encryptedText)
    decrypted = Buffer.concat([decrypted, decipher.final()])
    return decrypted.toString()
  } catch (e) {
    return false
  }
}

