# 03 Challenge: Password Generator

## Description

This application will provide the end user with a password generator solution, allowing them to choose the length and character types to include within the resulting password.

## Table of Contents

- [Website Preview](#website-preview)
- [Site Features](#site-features)
- [Acceptance Criteria](#acceptance-criteria-for-this-application)
- [Credits](#credits)
    - [CSS Information](#css-information)
    - [CSSBox Information](#cssbox-information)
    - [Git Cheat Sheet](#git-cheat-sheet-pdf)
    - [Git Flow Process](#git-flow-process)
    - [HTML Reference](#html-reference)
    - [Java Basics](#java-basics)
    - [Java Data Types](#java-data-types)
- [License](#license)
- [How To Contribute](#how-to-contribute)

# Application Details

[Password Generator](https://estee3.github.io/03-Challenge/)

![alt text](./Assets/Pictures/PW%20Generator%20Preview.png)

## Site Features
- Allows end user to choose length of their new password
- Built-in restrictions for length so that the user will be required to re-enter their lenght if less than 8 or more than 128
- Built-in validation of the user entering an integer and not a character other than numbers
- Allows end user to select one of 4 different types of characters (Numbers, Upper-Case Letters, Lower-Case Letters and Special Characters)
- Built-in validation, requiring the end user to select at least one type of character before continuing
- Alerts the end user to ensure they save the new password within their password keeper of choice.  It even presents a url to do their own reseach in finding one, if they don't already have one.
- Presents the resulting password to the end user, within the area of the application for easy highlight-and-select, allowing for eash copy/paste actions.

## Acceptance Criteria for this Challenge
***GIVEN I need a new, secure password:***
- ***WHEN*** I click the button to generate a password
    - ***THEN*** I am presented with a series of prompts for password criteria
- ***WHEN*** prompted for password criteria
    - ***THEN*** I select which criteria to include in the password
- ***WHEN*** prompted for the length of the password
    - ***THEN*** I choose a length of at least 8 characters and no more than 128 characters
- ***WHEN*** asked for character types to include in the password
    - ***THEN*** I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- ***WHEN*** I answer each prompt
    - ***THEN*** my input should be validated and at least one character type should be selected
- ***WHEN*** all prompts are answered
    - ***THEN*** a password is generated that matches the selected criteria
- ***WHEN*** the password is generated
    - ***THEN*** the password is either displayed in an alert or written to the page

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

# Credits
NOTE: Click preview pictures to navigate to the referenced site

## CSS Information
[![name](assets/images/CSS.png)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## CSSBox Information
[![name](assets/images/CSSBox.png)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

## Git Cheat Sheet (pdf)
[![name](assets/images/GitCheatSheet.png)](https://education.github.com/git-cheat-sheet-education.pdf)

## Git Flow Process
[![name](assets/images/GitFlow.png)](https://docs.github.com/en/get-started/quickstart/github-flow)

## HTML Reference
[![name](assets/images/HTMLReference.png)](https://www.w3schools.com/tags/tag_meta.asp)

# License

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

# How to Contribute

[Contributor Covenant](https://www.contributor-covenant.org/)