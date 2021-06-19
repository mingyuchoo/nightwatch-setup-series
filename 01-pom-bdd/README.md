# 01-pom-bdd

## How to set up nightwatch project

```bash
mkdir 01-pom-bdd
cd 01-pom-bdd
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
01-pom-bdd
├── globals.js
├── nightwatch.json
├── package.json
├── page-objects
│   └── ecosia.js
└── tests
    └── ecosia.spec.js
```
