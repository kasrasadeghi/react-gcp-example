## Intro to React
Kasra Sadeghi

[link](corded-fact-177717.appspot.com)

---

## What is React
Make UI, but with functions.

+++

## What's great about React?

Everything is easy, especially when it shouldn't be.

Everything passed with Props and State.

Protip: string interpolation is great.
Used with backticks and braces.

+++ 

Protip#2: styles are a dictionary. 

+++ 

## Mental Model
Everything's a tree. Your entire application is a giant tree.

+++

## What's a Prop?
If the components you're making are functions, props are the
arguments/parameters to the functions.

+++ 

## Then what's State?
Used to hold information about things happening. 
 - Holds API call responses
 - Holds current form information and click information
 - Holds things that have happened.

+++

## What's the difference?
A parent has state; a child has properties.

In render, you call other components to make them show up. Those are
the children. 
 - If you have props, you can pass them along.
 - If you have state, you can pass that to your children.
 
+++

## How to pass state up the tree?

The only way to pass up state is to give your child a handle to a
function that changes your state, and have it call that function.

This is like giving your little cousin the keys to your car. 
aka Very Dangerous(tm): Be careful.

--- 

## What to use?

- create-react-app
- react-router
- jsonify/axios
- reactstrap/customized theme

--- 

## create-react-app

[link](https://github.com/kasrasadeghi/react-gcp-example/blob/master/docs/init.md)

```bash
create-react-app react-gcp-example
cd react-gcp-example
mv README.md create-react-app.md
mkdir docs
cd docs
touch init.md
```

--- 

## project architecture

What are these files?
What do I change?
What should I be worried about in the future?

+++

# Files

## src/index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

+++

## public/index.html

```html
<html>
  ...
  <div id="root"></div>
</html>
```

+++ 

## src/App.js

```jsx
import React, { Component } from 'react';
...

class App extends Component {
  ...
}

export default App;
```

+++ 

# Future Concerns

API endpoint vs. Front-end endpoint

-> React-Router

---

# React-Router

A great library that implements routing for you.
Looks intimidating. It's not. It's 100x easier than you writing it
yourself.

Trust me, I did that.

+++

# Components

### Router
Put things in here and they get linked

### Route path=
Tells the router what to render when the route matches `path`.
Can be `exact`.

### Link to=
Changes the path when clicked.

---

# Reactstrap
[link](https://reactstrap.github.io/)
```bash
npm install bootstrap@4.0.0-alpha.6 --save
npm install --save reactstrap \
  react-addons-transition-group react react-dom
```

+++

edit src/index.js
```jsx
import 'bootstrap/dist/css/bootstrap.css';
```

+++

edit src/App.js
```jsx
import { Button ... } from 'reactstrap';
```

