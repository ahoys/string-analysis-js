# string-analysis-js
Simple tools for analysing strings.
Useful for purposes like detecting spam from messages.

## Functions

These are the functions you can use to analyse your string.

**getPercentageOfRepetitiveStructure(payload, splitter)**

1. @param payload {string, array of strings}: the string to be investigated.
2. @param splitter {string}: a character used to split the words. (default: " ")
- @returns {number}: a percentage of the repetitive structure.


**getPercentageOfShortStrings(payload, splitter, maxLength)**

1. @param payload {string, array of strings}: the string to be investigated.
2. @param splitter {string}: a character used to split the words. (default: " ")
3. @param maxLength {number}: a maximum length for a word to be considered small. (default 3)
- @returns {number}: a percentage of the short words.


**getPercentageOfLongStrings(payload, splitter, minLength)**


1. @param payload {string, array of strings}: the string to be investigated.
2. @param splitter {string}: a character used to split the words. (default: " ")
3. @param minLength {number}: a minimum length for a word to be considered long. (default 16)
- @returns {number}: a percentage of the long words.


**getPercentageOfRepetitiveChars(payload, minChars)**

1. @param payload {string, array of strings}: the string to be investigated.
2. @param minChars {number} a minimum length for the repetition before being accounted. (default 3)
- @returns {number}: a percentage of the repetitive chars.

## License
MIT
