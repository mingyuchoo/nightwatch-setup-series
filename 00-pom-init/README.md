# 00-pom-init

## How to set up nightwatch project

```bash
mkdir demo-app
cd demo-app
npm init -y
npm install --save-dev nightwatch chromedriver
```

## Edit `package.json`

```json
...

  "scripts": {
    "test": "nightwatch"
  },

...
```

## How to test

```bash
npm run test

# or

yarn test
```

## Project structure

```bash
demo-app
├── globals.js
├── nightwatch.json
├── package.json
├── page-objects
│   └── ecosia.js
└── tests
    └── ecosia.spec.js
```
