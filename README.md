<h1 align="center">TreeMatch</h1>

A service that tells you what kind of tree you should plant in your garden! It guides users through a questionnaire and matches them with a tree species.

![image](https://user-images.githubusercontent.com/38395166/106522015-2eedb580-6533-11eb-81f9-dcffde5d2910.png)

![image](https://user-images.githubusercontent.com/38395166/106522145-58a6dc80-6533-11eb-9a1e-bed394903e98.png)

![image](https://user-images.githubusercontent.com/38395166/106522196-6b211600-6533-11eb-81ae-476ada02525d.png)

![image](https://user-images.githubusercontent.com/38395166/106522240-7f651300-6533-11eb-8fa5-9ff1c8a15ef7.png)

Play with this app at https://tree-match.herokuapp.com/.

## Table of Contents

- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [How to Build the App](#how-to-build-the-app)
- [How to Run the App](#how-to-run-the-app)
- [How to Test the App](#how-to-test-the-app)
  <br/>

## Built With

- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/) with npm included.
- [Express](https://expressjs.com/)
  <br/>

## Getting Started

1. Clone the project source code.

```
git clone https://github.com/AVu120/tree-match.git
```

2. Navigate into the project directory.

```
cd tree-match
```

<br/>

## How to Build & Run the App Locally

1. Ensure you're on the main or dev branch.

```
git checkout main
```

OR

```
git checkout dev
```

2. Start the frontend running on a webpack dev server.

```
cd client
npm i
npm start
```

3. Start the backend/api-server.

```
cd ../server
npm i
npm start
```

4. Access the app in any web browser via localhost:3000.

<br/>

## How to Deploy the App

1. In the root directory (/tree-match), ensure you're on the deployment branch.

```
git checkout deployment
```

2. Run the build script.

```
npm run build
```

3. Run the deploy script.

```
npm start
```

4. Access the app in any web browser via localhost:5000

<br/>

## How to Test the App

Test the frontend:

```
cd client
npm test
```

Test the backend:

```
cd ../server
npm test
```
