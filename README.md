
React.js User Profile

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Technologies used:

* node.js
* react.js
* react-router-dom (react-router v4)
* mongodb & mongoose
* passport.js (passport-local)
* redux
* linting
* unit testing
* image upload (for user profile)


# setup

Install Node (version 8) and mongo.

## development
1. clone repo
2. rename .env.example file to .env and add mongodb_uri
2. npm install
```
cd frontend
npm install
cd ..
npm install
```
4. npm run develop

## lint

npm run lint

## test

npm run test

## production (e.g. for cloud9)
1. clone repo
2. rename .env.example file to .env and add mongodb_uri
3. npm install (same as development above)
4. build production
```
cd client
npm run build
cd ..
```
5. run server `node server`

## Instructions on site
1. register on site
2. login with account created
3. go to profile
4. test different options
