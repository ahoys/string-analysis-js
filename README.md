# string-analysis-js
Simple tools for analysing strings.
Useful for purposes like detecting spam from messages.

## About results

All percentages are returned as numbers, ranging from 0 (0%) to 1 (100%).

The results are not rounded.

## Functions

These are the functions you can use to analyse your string(s). Content can often be
inputted as a string or an array of strings. The former requires a valid splitter that is
used to split the string into words, for more: 
[MDN String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split).

Note that you do not need to input values to @params that have a default value.

**getPercentageOfRepetitiveStructure(content, splitter)**

1. @param content {string, array of strings}: the string to be investigated.
2. @param splitter {string}: a character used to split the words. (default: " ")
- @returns {number}: a percentage of the repetitive structure.


**getPercentageOfShortStrings(content, splitter, maxLength)**

1. @param content {string, array of strings}: the string to be investigated.
2. @param splitter {string}: a character used to split the words. (default: " ")
3. @param maxLength {number}: a maximum length for a word to be considered small. (default 2)
- @returns {number}: a percentage of the short words.


**getPercentageOfLongStrings(content, splitter, minLength)**


1. @param content {string, array of strings}: the string to be investigated.
2. @param splitter {string}: a character used to split the words. (default: " ")
3. @param minLength {number}: a minimum length for a word to be considered long. (default 16)
- @returns {number}: a percentage of the long words.


**getPercentageOfRepetitiveChars(content, minChars)**

1. @param content {string, array of strings}: the string to be investigated.
2. @param minChars {number} a minimum length for the repetition before being accounted. (default 3)
- @returns {number}: a percentage of the repetitive chars.

**getPercentageOfUpperCaseChars(content, re)**

1. @param content {string}: the string to be investigated.
2. @param re {string} a custom regex for detecting the uppercase letters. (default /^[A-ZÄÖÅÆØ]+$/)
- @returns {number}: a percentage of the uppercase chars.


**getAll()**

- @returns {Array}: an array of objects, containing all the string tools available.

## More about getAll()

You can use `getAll()` to receive all the available string tools in this module. In this way your 
application can always use the full range of tools available, before processing the results further. 
As this module obtains new tools, your application will always stay up-to-date with a mere `npm update`.

Below is the provided data about the tools:

| Key | Description |
| --- | --- |
| key | A key corresponding the direct function call. |
| func | The actual function. |
| preferredStringFormat | A preferred format for the string (eg. fastest). |
| parameters | All possible parameters. If multiple types are allowed, all are listed. |
| requiredParameters | Whether the parameter is required (same indexes as in parameters). |

Example result:
```
[
 {
  key: 'getPercentageOfRepetitiveStructure',
  func: getPercentageOfRepetitiveStructure,
  preferredStringFormat: 'Array',
  parameters: {
   content: ['Array', 'string'],
   splitter: ['string']
  },
  requiredParameters: [true, false],
 },
 {
  key: 'getPercentageOfRepetitiveChars',
  func: getPercentageOfRepetitiveChars,
  preferredStringFormat: 'string',
  parameters: {
   content: ['string'],
   minChars: ['number']
  },
  requiredParameters: [true, false],
 }
]
```

## License
MIT
