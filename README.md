[![Build Status](https://travis-ci.org/MicheleBertoli/react-count-to.svg?branch=master)](https://travis-ci.org/MicheleBertoli/react-count-to)

React Count To
==============

Animated counter  component for [React.js](http://facebook.github.io/react/)

Installation
------------

```sh
$ npm install react-count-to --save
```

Demo
----

**Live**

[http://react-count-to.herokuapp.com](http://react-count-to.herokuapp.com)

**Docker** (thanks to [Alessandro Cinelli](https://github.com/cirpo))

- `docker build -t react-count-to .`
- `docker run -p 3000:3000 -it react-count-to`
- connect to [http://localhost:3000](http://localhost:3000) and enjoy

Usage
-----

```javascript
import CountTo from 'react-count-to';

<CountTo to={1234} speed={1234} />
```

Attributes
----------

- **from** (optional): Counting from (default: 0).
- **to**: Counting to.
- **speed**: Duration (in milliseconds).
- **delay** (optional): Delay (in milliseconds) between each refresh (default: 100).
- **onComplete** (optional): A callback triggered when counting is done.
- **digits** (optional): The number of digits to appear after the decimal point (default: 0).

Test
----

```sh
$ npm test
```

