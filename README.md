
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## APIs

```
# Check Status
curl --location --request GET 'http://localhost:3000/v1/upload'

# Upload Image
curl --location --request POST 'http://localhost:3000/v1/upload' \
--form 'file=@"/home/rajdeep/Pictures/Wallpapers/617bcdf2-dba9-4731-9392-93a079f3d52c.jpg"'

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
