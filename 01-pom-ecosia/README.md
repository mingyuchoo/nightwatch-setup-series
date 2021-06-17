# 01-pom-ecosia

## How to set up nightwatch project

```bash
mkdir 01-pom-ecosia
cd 01-pom-ecosia
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
01-pom-ecosia
├── globals.js
├── nightwatch.json
├── package.json
├── page-objects
│   └── ecosia.js
└── tests
    └── ecosia.spec.js
```
