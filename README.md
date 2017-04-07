## Chance-generator

A Meteor package for the generating list of random values.

> ChanceGenerator package is based on JavaScript library [ChanceJS](http://chancejs.com/)

## Installation

```bash
meteor add nodexpert:chance-generator
```

## Docs

To generate list of random items, you can call ChanceGenerator's `generate` function which can take 3 parameters,

- name (Required)
  - description : Name of Chance Function
  - type : String
  - sample values : name, age, date, etc.


- times (Optional)
  - description : Number of values to generate
  - type : Number
  - default value : 1
  - sample values : 1, 2, 3,.........


- params (Optional)
  - description : Options for Chance Function
  - type : Object
  - default value : {}
  - sample values : when you see params, it is a plain JavaScript object, e.g. `{string: true}` for date function

For all the functions ChanceJS provide and their options, please refer to their [docs](http://chancejs.com/).

## Usage

Now the million dollar question, when do you use ChanceGenerator, as you can simply use ChanceJS from npm. First of all, it removes the hassle of creating multiple items from ChanceJS as it only gives one value at a time. For eg, you want to test your application which sorts users of the USA based on their states, you can use the following snippet to generate random dummy data.

```bash
if (Meteor.isClient) {
  let name = "state",
      times = 2000,
      params = {
        full: true,
        country: 'us'
      };
  ChanceGenerator.generate(name, times, params)
}

npm run test
```

It also has some additional features other than ChanceJS functions like generating range of user defined dates instead of some random dates which ChanceJS generates.

```bash
if (Meteor.isClient) {
  let name = "date",
      times = 20,
      params = {
        reference_date: "01/01/2017",
        time_unit : "months",
        time_interval: "2"
      };
  ChanceGenerator.generate(name, times, params)
}
```

Above snippet will generate 20 dates starting from Jan 1st, 2017 and next date will be 2 months apart and so on for next dates.

This feature will take only 3 parameters,

- reference_date (Required)
  - description : Date for first item of list
  - type : String and valid date
  - sample values : "01/01/2017",  "2017/01/01"


- time_unit (Optional)
  - type : String
  - default value : days
  - sample values : "seconds", "minutes", "hours", "days", "weeks", "months", "years"


- time_interval (Optional)
  - type : String
  - default value : 1
  - sample values : 1, 2, 3,....


  ## Running the test

  Command to check whether modules are working as it is intended to do.

```
  nodexpert:chance-generator$ npm run test
```
  ## Linting of package
  Command to analyse the code for potential errors via lint.
```
  nodexpert:chance-generator$ npm run lint
```
