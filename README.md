
## Homepage
![Homepage](https://user-images.githubusercontent.com/55052227/169927689-b6e0ebf9-062c-42c4-b822-ca3d0317d841.png)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
/
├─public/
| ├─ favicon.ico
| ├─ index.html
| ├─ logo192.png
| ├─ logo512.png
| ├─ manifest.json
| ├─ robots.txt
|
├─ src/
│  ├─ assets/                 # Assets
│  │  ├─ crown.svg/           # Brand logo
│  │  ├─ shopping-bag.svg     # view order logo
│  │
│  ├─ components/         # Components
│  │  ├─ cart-dropdown / 
|  |     ├─cart-dropdown.component.jsx
|  |     ├─cart-dropdown.style.scss
|  |
│  │  ├─ cart-icon / 
|  |     ├─cart-icon.component.jsx
|  |     ├─cart-icon.style.scss
│  │  ├─ cart-icon / 
|  |     ├─cart-icon.component.jsx
|  |     ├─cart-icon.style.scss
|  |
│  │  ├─ cart-item / 
|  |     ├─cart-item.component.jsx
|  |     ├─cart-item.style.scss
|  |
│  │  ├─ checkout-item  / 
|  |     ├─checkout-item.component.jsx
|  |     ├─checkout-item.styles.scss
|  |
│  │  ├─ collection-item  / 
|  |     ├─collection-item.component.jsx
|  |     ├─collection-item.style.scss
|  |
│  │  ├─ collection-preview  / 
|  |     ├─collection-preview.component.jsx
|  |     ├─collection-preview.style.scss
|  |
│  │  ├─ custom-button  / 
|  |     ├─custom-button.component.jsx
|  |     ├─custom-button.style.scss
|  |
│  │  ├─ directory / 
|  |     ├─directory.component.jsx
|  |     ├─directory.style.scss
|  |
│  │  ├─ form-input / 
|  |     ├─form-input.component.jsx
|  |     ├─form-input.style.scss
|  |
│  │  ├─ header-component / 
|  |     ├─ header.component.jsx
|  |     ├─header.styles.jsx
|  |     ├─ header.style.scss
|  |
│  │  ├─ menu-item / 
|  |     ├─ menu-item.component.jsx
|  |     ├─ menu-item.style.scss
|  |
│  │  ├─ sign-in/ 
|  |     ├─ sign-in.component.jsx
|  |     ├─ sign-in.style.scss
|  |
│  │  ├─ sign-up/ 
|  |     ├─ sign-up.component.jsx
|  |     ├─ sign-up.styles.scss
|  |
│  │  ├─ stripe-button/ 
|  |     ├─ stripe-button.component.jsx
|  |
│  │  ├─ with-spinner/ 
|  |     ├─ with-spinner.component.jsx
|  |     ├─ with-spinner.styles.jsx
|  |
|  |
│  ├─ pages/         
│  │  ├─ checkout/ 
|  |     ├─ checkout.component.jsx
|  |     ├─ checkout.styles.scss
|  |
│  │  ├─ collection/ 
|  |     ├─ collection.component.jsx
|  |     ├─ collection.styles.scss
|  |
│  │  ├─ homepage/ 
|  |     ├─ homepage.component.jsx
|  |     ├─ homepage.styles.jsx
|  |     ├─ homepage.styles.scss
|  |
│  │  ├─ shop/ 
|  |     ├─ shop.component.jsx
|  |
│  │  ├─ sign-in-and-sign-up-page/ 
|  |     ├─ sign-in-and-sign-up-page.component.jsx
|  |     ├─ sign-in-and-sign-up-page.style.scss
|  |
|  |
│  ├─ redux/         
│  │  ├─ cart/ 
|  |     ├─ cart.action.js
|  |     ├─ cart.reducer.js
|  |     ├─ cart.selectors.js
|  |     ├─ cart.types.js
|  |     ├─ cart.ultils.js
|  |
│  │  ├─ directory/ 
|  |     ├─ directory.reducer.js
|  |     ├─ directory.selector.js
|  |
│  │  ├─ shop/ 
|  |     ├─ shop.actions.js
|  |     ├─ shop.reducer.js
|  |     ├─ shop.selector.js
|  |     ├─ shop.types.js
|  |
│  │  ├─ user/ 
|  |     ├─ user.action.js
|  |     ├─ user.reducer.js
|  |     ├─ user.selectors.js
|  |     ├─ user.types.js
|  |
│  │  ├─ root-reducer.js
|  |  ├─ store.js
|  |
│  ├─ App.css   
│  ├─ App.js  
│  ├─ App.test.js   
│  ├─ index.css 
│  ├─ index.js   
│  ├─ logo.svg  
│  ├─ serviceWorker.js   
│  ├─ setupTests.js 
│
├─ .gitignore        # List of files and folders not tracked by Git
├─ README.md         # Linting preferences for JavasScript
├─ debug.log  # Configuration for Fractal
├─ package.json       # Configuration for Gulp tasks
├─ yarn.lock          # License information for this project
# This file
```


## Checkout
![Checkout ](https://user-images.githubusercontent.com/55052227/169927745-74e08201-a2d6-482a-914f-da7d08685c50.png)

## Payment
![Payment](https://user-images.githubusercontent.com/55052227/169927760-0be66676-2f93-4f3d-9248-e721d9b7fea9.png)
