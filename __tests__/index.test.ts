import {isTemporaryEmail} from '../src'

describe('When isTemporaryEmailValidator gets email', () => {
    it('should return true if emails is temporary', () => {
        expect(isTemporaryEmail('test@0-180.com')).toBe(true)
    })

    it('should return false if emails is not temporary', () => {
        expect(isTemporaryEmail('test@gmail.com')).toBe(false)
    })
})
