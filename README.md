[![Build Status](https://travis-ci.org/chrisanderss0n/nextday.svg?branch=master)](https://travis-ci.org/chrisanderss0n/nextday) [![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url] <span class="badge-daviddm"><a href="https://david-dm.org/chrisanderss0n/nextday" title="View the status of this project's dependencies on DavidDM"><img src="https://david-dm.org/chrisanderss0n/nextday.svg" alt="Dependency Status" /></a></span>

# nextday helps you find week-days.
You give the library a date and an optional number of days, and it returns to you a date of a week-day that fits your criteria.  This ultra lightweight library has no dependencies.

<h2>Example questions this library will answer</h2>

- What is the next week-day from today?
- What is the 3rd week-day from today?
- What is 20th week-day from today?
- What is the 7th week-day from yesterday?
- What is the 1st week-day from December 31st?

The library accounts for week-ends, months and years...but not holidays (yet).

I did not intend to build this library.  I was building my company website [http://nycode.co](https://nycode.co), and just wanted to display the second business day from the current day on the page.  Sounds simple enough right?

I expected it would take me 30 mins to get that task done, and here we are with this library instead.

# What might you use this for?

A couple examples of what you might use this for:

- Finding a date that's on a week-day for people trying to schedule a meeting
- A reminder app where reminders happen on week-days only

# Usage

What is the next week-day from today?
```
var nextDay = require("nextday-js");
var day = nextDay.next(new Date());
```

What is the 3rd week-day from today?
```
day = nextDay.next(new Date(), 3);
```

What is the 7th week-day from September 9th, 2016?
```
day = nextDay.next(new Date("9/9/2016"), 7);
```

What is the 1st week-day from December 31st, 2016?
```
day = nextDay.next(new Date("12/31/2016"));
```

# Installing
Nextday is available on npm as "nextday-js"
```
npm install nextday-js
```

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/nextday-js
[npm-version-image]: http://img.shields.io/npm/v/nextday-js.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/nextday-js.svg?style=flat