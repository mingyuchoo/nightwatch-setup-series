# 03-added-lint

## How to set up nightwatch project

```bash
mkdir 03-added-lint
cd 03-added-lint
npm init -y
npm install --save-dev \
   nightwatch chromedriver geckodriver
```

### Edit `package.json`

```json
...

  "scripts": {
    "lint": "eslint --config .eslintrc.yaml --fix .",
    "test:safari": "nightwatch --env safari",
    "test:chrome": "nightwatch --env chrome",
    "test:firefox": "nightwatch --env firefox",
  },

...
```

### How to test

```bash
npm run test:safari
npm run test:chrome
npm run test:firefox


# or

yarn test:safari
yarn test:chrome
yarn test:firefox
```

### Project structure

```bash
03-added-lint
├── globals.js
├── nightwatch.json
├── package.json
├── page-objects
│   └── ecosia.js
└── tests
    └── ecosia.spec.js
```

## How to install modules by offline

```bash
yarn install --offline

# or

yarn install --offline --production # for deploy
```
