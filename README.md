# angular-easy-loading

This directive adds an animated loading overlay to DOM elements marked with thr-loading attribute. The animated loading effect was inspired by http://tobiasahlin.com/spinkit/.

## Installation

1. Set `angular-easy-loading` as a dependencie of your AngularJS module.
2. Add a script tag pointing to `dist/angular-easy-loading.min.js` or `dist/angular-easy-loading.js` and a link tag pointing `dist/angular-easy-loading.min.css` or `dist/angular-easy-loading.css` to your index.html.

## Usage

thr-loading directive should be added to DOM elements that has a relative or absolute  positioning as it needs to fulfill the element width and height. That said, use thr-loading as bellow:
```html
<div thr-loading="someAngularExpression"></div>
```
angular-easy-loading can be customized using css selectors, as example:
```css
/* To change the overlay background color */
.someParentClass .loading-overlay {
    background-color: rgba(0,0,0,0.8);
}

/* To change the spinners color */
.someParentClass .loading-overlay .spinner > div {
    background-color:  white;
}
```
An example can be found in https://thr0wn.github.io/angular-easy-loading/ 
