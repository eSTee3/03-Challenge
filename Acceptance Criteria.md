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

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
