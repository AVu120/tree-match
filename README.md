<h1 align="center">TreeMatch</h1>

![image](https://user-images.githubusercontent.com/38395166/106522015-2eedb580-6533-11eb-81f9-dcffde5d2910.png)

## Table of Contents

- [About](#about)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [How to Build the App](#how-to-build-the-app)
- [How to Run the App](#how-to-run-the-app)
- [How to Test the App](#how-to-test-the-app)

## About

A service/app that tells you what kind of tree you should plant in your garden! It guides users through a questionnaire and matches them with a tree species.

![image](https://user-images.githubusercontent.com/38395166/106522145-58a6dc80-6533-11eb-9a1e-bed394903e98.png)

![image](https://user-images.githubusercontent.com/38395166/106522196-6b211600-6533-11eb-81ae-476ada02525d.png)

![image](https://user-images.githubusercontent.com/38395166/106522240-7f651300-6533-11eb-8fa5-9ff1c8a15ef7.png)

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

Note: Currently I am using a private external api endpoint locally of which I do not have permission to publicize here. I may just build an identical/similiar api for this and deploy it in a backend with the frontend later (e.g. on Heroku).

Until then, you'll need to create your own api server to supply questions & answers to the client.

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
