<h1 align="center">TreeMatch</h1>

## Table of Contents

- [About](#about)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [How to Build the App](#how-to-build-the-app)
- [How to Run the App](#how-to-run-the-app)
- [How to Test the App](#how-to-test-the-app)

## About

A service/app that tells you what kind of tree you should plant in your garden! It guides users through a questionnaire and matches them with a tree species.

## Built With

- [React](https://reactjs.org/)

## Prerequisites

- [Node](https://nodejs.org/en/) with npm included.
- [Git](https://git-scm.com/)

## How to Build the App

1. Clone the project source code.

```
git clone https://github.com/AVu120/tree-match.git
```

2. Navigate into the project directory.

```
cd tree-match
```

3. Install all dependencies.

```
npm i
```

4. Create a .env file at the root of the project directory with the following contents.

```
REACT_APP_BASE_API_URL=##############################################
```

5. Deploy the app on a [local web server](https://webpack.js.org/configuration/dev-server/) in development mode.

```
npm start
```

## How to Run the App

1. Enter localhost:3000 into the url bar of any web-browser.

## How to Test the App

Start the Jest test runner in watch mode.

```
npm test
```
