import disposableEmailDomains from './emails.json'

type EmailsJson = {
  [key: string]: boolean
}
export function isTemporaryEmail(email: string): boolean {
  return (disposableEmailDomains as EmailsJson)[email.split('@')[1]] === true
}
