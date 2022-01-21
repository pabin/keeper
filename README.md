# Keeper
Project repository for Keeper mobile application

## Setting up

- node/npm:
  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
  - Restart terminal application
  - nvm install 14.17.4
  - `nvm use 14`
- yarn: `npm install -g yarn@1.22.10`

## Running the app

```
yarn
yarn pod:install
yarn start
yarn android or yarn ios
```

## Style

### Running the linter

```
yarn lint
```

### Running the Test

```
yarn test
```

## Created with React Native CLI Typescript Boilerplate

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Testing with [Jest](https://jestjs.io/)