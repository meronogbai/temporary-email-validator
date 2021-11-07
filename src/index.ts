import fs from 'fs'
import path from 'path'

const pathToEmailsList = path.join(__dirname, '../data/emails.txt')
const disposableEmailDomains = fs.readFileSync(pathToEmailsList, 'utf8').split('\n')

export function isTemporaryEmail(email: string): boolean {
  return disposableEmailDomains.some((disposableEmail) => email.endsWith(disposableEmail))
}
