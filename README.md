# angular-easy-loading

This directive easily turns possible to create popovers associated with any kind of DOM elements.

## Installation

1. Set `angular-easy-popover` as a dependencie of your AngularJS module.
2. Add a script tag pointing to `dist/angular-easy-popover.min.js` or `dist/angular-easy-popover.js` and a link tag pointing `dist/angular-easy-popover.min.css` or `dist/angular-easy-popover.css` to your index.html.

## Usage

thr-popover directive should be associated to DOM elements, as it positioning depends of this associated element. That said, use thr-popover as bellow:
```html
<i id="gear-icon" class="fa fa-cog fa-lg"></i>
<thr-popover bind-to="#gear-icon">
    popover content
</thr-popover>
```
The previous example has a thr-popover bound to an icon, so although the popover starts closed, it will be opened after a click on the icon.
An example can be found in https://thr0wn.github.io/angular-easy-popover/ 
