# NumberIdentifier - DCTP Assignment project for Group G

## Table of Contents

1. [Task](#task)
2. [Scenario](#scenario)
3. [Advanced Features](#advanced-features)
4. [How to install](#how-to-install)
5. [How to run](#how-to-run)

## Task

01 - Phonie: Identify the telecoms carrier from a phone number

## Scenario

A user is filling a form in your web application and they are required to enter their phone number into a form field.
Outcome

After typing the phone number into the form field, the UI indicates that it is an MTN or GLO or Airtel or 9mobile number e.t.c
(e.g if its an MTN line, display the MTN icon/logo somewhere beside the form field)

## Advanced features

- Add validation - Use the pattern attribute of the HTML form field to restrict phone numbers to a certain carrier, e.g restrict to only Airtel such that entering an MTN/GLO number would be invalid

- Support +XYZ country codes (e.g +234 for Nigeria) - Still detect the carrier even if the user prefixed the number with their +XYZ country code

## How to install

### Using Git (recommended)

1. Clone the project from Github

```
git clone https://github.com/Asfemi/numberIdentifier.git
```

### Using manual download ZIP

1. Download Repository
2. Uncompress to your desired directory

### Install Live-Server

1. You can download it from the Extensions Marketplace in Visual Studio Code
2. You can also click this link to download it from the official microsoft website

```
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
```

## How to run

### Launch Live-Server locally by typing the code below in your terminal

```
live-server
```

## Author

Made with ♥ by Group G of the DCTP - Backend

## License

None
