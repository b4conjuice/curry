# curry for 👌
> a simple react boilerplate for single page web applications

## getting started
```shell
git clone https://github.com/dlopez807/curry.git
cd curry
npm install
npm start
```
this will start a dev server on [localhost:3030](http://localhost:3030) using [Parcel](https://parceljs.org/), which has built in hot module replacement

## testing
```shell
npm run start-bs
```
alternatively, you may also use [Browser Sync](https://browsersync.io/) for convenient testing across devices. this will open up an external url that you can use to access your app on other devices on the same network

## building
```shell
npm run build
```
this will bundle your application for production. your html, css, and js will be minified and copied to a build folder

## deploying
```shell
npm run deploy
```
this will deploy the contents of your build folder to [Surge](https://surge.sh/)

## html
* Meta tags for mobile optimization

## css
* [Styled Components](https://www.styled-components.com/)
* [CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
* [Normalize.css](https://necolas.github.io/normalize.css/)

## javascript
* ES6
* [React](https://reactjs.org)
* async await through babel polyfill