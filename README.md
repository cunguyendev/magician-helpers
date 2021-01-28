# Magician Helpers() {

✨*The fastest code implementation for JavaScript*✨

## Getting Started
Before we get started, you need to add Magician Helpers to the source. Like if you're building a website, an `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My First App</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <script src="https://magician-helpers.netlify.app/index.js"></script>
  </body>
</html>
```

In your JS file, let's do something magical:

> JavaScript ES5
```js
var Helpers = window.Helpers;
```

> JavaScript ES6
```js
const { Helpers } = window;
```

## Table of Contents

1. [Arrays](#arrays)
1. [Objects](#objects)
1. [String](#string)
1. [Datetime](#datetime)
1. [Numbers](#numbers)
1. [URLs](#urls)
1. [DOM (Document Object Model)](#dom)
1. [Pagination](#pagination)
1. [API-request](#api-request)
1. [Water-mark](#water-mark)
1. [Image API](#image-api)

## Arrays
- `isDataExists(array: array, element: any)` | Check an element if exists. Return `Boolean` value.

```js
const isAExist = Helpers.isDataExists(['A', 'B', 'C'], 'A');

console.log(isAExist); // true
```

- `removeItem(array: array, value: any)` | Remove an item from array. Return an `array` without having that value.
```js
const output = Helpers.removeItem(['A', 'B', 'C'], 'A');

console.log(output); // ["B", "C"]
```

**[⬆ back to top](#table-of-contents)**

## Objects

- `isObject(value: any)` | Check is object or not. Return `boolean` value.

```js
const theArray = ['A', 'B', 'C'];
const theObject = {
  who: 'Magician',
};

console.log(Helpers.isObject(theArray)); // false
console.log(Helpers.isObject(theObject)); // true
```

- ` convertToArray(object: object)` | Convert the array to the object. Return an `array`.

```js
const theObject = {
  0: {
    id: 1,
    name: 'John',
  },
  1: {
    id: 2,
    name: 'Alan',
  },
};
const newArray = Helpers.convertToArray(theObject);

console.log(newArray); // [{...}, {...}]
```

- `getObjectProperty(obj: object, key: any)` | Get property from object. Return the value of that property.

```js
const theObject = {
  who: 'Magician',
  type: 'Helpers',
};

const theValue = Helpers.getObjectProperty(theObject, 'type');

console.log(theValue); // Helpers

```

- `getObjectPropertyByValue(value: string, object: object)` | Get object's property by value. Return `property` that matches with the value.
```js
const theObject = {
  who: 'Magician',
  type: 'Helpers',
};

const theValue = Helpers.getObjectPropertyByValue('Helpers', theObject);

console.log(theValue); // type
```

**[⬆ back to top](#table-of-contents)**

## String
- `generateString(string: string, number: number)` | Generate string with a specific length. Return a `string`

```js
const myString = Helpers.generateString('A', 6);

console.log(myString); // AAAAAA
```

**[⬆ back to top](#table-of-contents)**

## Datetime
- `getCurrentTime(isShowDetail: boolean)` | Get current time. Return the current time

```js
const currentTime = Helpers.getCurrentTime();
const currentTimeDetail = Helpers.getCurrentTime(true);

console.log(currentTime); // Ex: Thu Jan 28 2021 15:49:38 GMT+0700 (Indochina Time)
console.log(currentTimeDetail); // {hour: 15, ...}
```

**[⬆ back to top](#table-of-contents)**

## Numbers
- `toNumber(value: string)` | Convert the numver with string type to number. Return a number.

```js
const myNumber = Helpers.toNumber('98');

console.log(myNumber); // 98
```

- `paddingZero(yourNumber: number, length: number)` | Padding the zero to the number. Return a number with string type.

```js
const myNumber = Helpers.paddingZero(6, 2);

console.log(myNumber); // 06
```

- `handleSingular(yourNumber: number, yourText: string)` | Add "s" for the plural number. Return a `string` value.

```js
const plural = Helpers.handleSingular(6, 'item');
const singular = Helpers.handleSingular(1, 'item');

console.log(plural); // 6 items
console.log(singular); // 1 item
```

- `randomNumber(start: number, end: number)` | Random number within a range. Return a `number` value.

```js
const myNumber = Helpers.randomNumber(0, 10);

console.log(myNumber); // I guess is 6
```

- `moneyFormat(number, string)` | Money format. Return a `string` value.
```js
const totalAccount = Helpers.moneyFormat(10000, ',');

console.log(totalAccount); // 10,000
```

**[⬆ back to top](#table-of-contents)**

## URLs
- `getParamInURL = (url: string, item: string)` | Get param in url. Return a `string` value.

```js
const getTab = Helpers.getParamInURL('https://github.com/cunguyendev?tab=repositories', 'tab');

console.log(getTab); // repositories
```

**[⬆ back to top](#table-of-contents)**

## DOM
- `qs(selector: string)` | Short hand for [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). Returns the first Element within the document that matches the specified selector.

```js
const element = Helpers.qs("input[name='login']");
```

- `qsAll(selector: string)` | Short hand for [querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll). Returns a static (not live) [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) representing a list of the document's elements that match the specified group of selectors.

```js
const element = Helpers.qsAll("input[name='login']");
```

- `isClassExists(element: object, class: string)` | Check class exists inside the DOM. Return a `boolean` value.

```js
const notification = document.getElementById('notification');
const isClassShowExsts = Helpers.isClassExists(notification, 'show');
```

- `addClass(element: object, class: string)` | Add class into DOM element.

```js
const notification = document.getElementById('notification');

Helpers.addClass(notification, 'show');
```

- `removeClass(element: object, class: string)` | Remove class in DOM element.

```js
const notification = document.getElementById('notification');

Helpers.removeClass(notification, 'show');
```

**[⬆ back to top](#table-of-contents)**

## Pagination

- `pagination(numberEachPage, dataInput)` | Pagination for data. Return an `object` with pagination options.

```js
const theData = [
  'A',
  'B',
  'C',
  'D',
  'AA',
  'BB',
  'CC',
  'DD',
];

const paginationData = Helpers.pagination(4, theData);
console.log(paginationData);

// [['A', 'B', 'C', 'D'], ['AA', 'BB', 'CC', 'DD']]

// {
//   1: ['A', 'B', 'C', 'D'],
//   2: ['AA', 'BB', 'CC', 'DD'],
// }
```

**[⬆ back to top](#table-of-contents)**

## API-request
- ` XHTTPRequest(dataRequest: object)` | HTTP Request handling.

```js
Helpers.XHTTPRequest({
  method: 'GET',  // GET, POST, PUT, DELETE
  endpoint: 'https://api.github.com/users/cunguyendev', // The API URL, collection URL
  body: {}, // Data attached
  response: (response) => {
    /**
     * TODO: Do something with the response
     */
  },
  header: {}, // Custom header request
});
```

**[⬆ back to top](#table-of-contents)**

## Water-mark

Coming soon...

**[⬆ back to top](#table-of-contents)**

## Image API

Coming soon...

**[⬆ back to top](#table-of-contents)**


# };