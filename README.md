# Temporary Email Validator

## Install

```bash
npm i temporary-email-validator
```

## Usage

```ts
isTemporaryEmail('test@0-180.com') // returns true if email is temporary
isTemporaryEmail('test@gmail.com') // returns false otherwise
```

## Acknowledgements
I got the list of temporary email providers from https://github.com/wesbos/burner-email-providers.
