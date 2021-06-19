# 02-added-drivers

## How to set up nightwatch project

```bash
mkdir 02-added-drivers
cd 02-added-drivers
npm init -y
npm install --save-dev \
   nightwatch chromedriver geckodriver
```

## Edit `package.json`

```json
...

  "scripts": {
    "test:safari": "nightwatch --env safari",
    "test:chrome": "nightwatch --env chrome",
    "test:firefox": "nightwatch --env firefox",
  },

...
```

## How to test

```bash
npm run test:safari
npm run test:chrome
npm run test:firefox


# or

yarn test:safari
yarn test:chrome
yarn test:firefox
```

## Project structure

```bash
02-added-drivers
├── globals.js
├── nightwatch.json
├── package.json
├── page-objects
│   └── ecosia.js
└── tests
    └── ecosia.spec.js
```
