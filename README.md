# Simple Palindrome Application 
This application validates user input and decide if the entered string is a palindrome or not. If you don't know what the palindrome is please follow this [link](https://en.wikipedia.org/wiki/Palindrome).

## Known limitations
* Application did not support extra unicode characters
* User input is not limited. There are no guaranties that application will correctly work with extra long strings.
* User lost history when refreshes the application. (use sessionStorage)

## Pre-requisities
1. `node` in version `v6.6.0` or compatible
2. `npm` in version `3.10.3` or compatible
3. Installed one of the supported browsers
    - Chrome (latest)
    - IE 11
5. Run `npm install` in main folder of project to download dependencies.

## How to run product
1. Run `npm run build` to build the product. Result of product is located in `dist` folder.
2. Run `npm run start` to start a web server. See output and use one of the location in browser.

## How to develop
Run `npm run start:dev` in main folder of project. It will start a web server that will serve the application at `http://localhost:8080` (by default)

## Unit tests
Run `npm run test` this will perform a single run of all unit tests.

## E2E Tests
Run `npm run e2e:setup` to download necessary libraries. It will download webdriver for Chrome and IE.

Run `npm run webdriver:start` to start up local instance of selenium server. **Requires java on path**

Run `npm run e2e` to start the end-to-end tests.

## Todo
- production build tune up (uglify, gzip sources)
- cover other services by unit tests
- finish e2e test to test clipboard integration
- static resources version in the name to prevent caching
- localization (externalize strings at least)
- index.hml should be enhanced by some metas
- UX tune up
    - replace alerts by some nice toasters
    - styles for wider screens
    - mobile UI support
    - replace native buttons by some nicer
- limit user input (to avoid megabytes on input)
