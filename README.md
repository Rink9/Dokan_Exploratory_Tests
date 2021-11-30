# Dokan END 2 END Testing by using CodeceptJS and WebDriver

## Step 1
### JAVA Installation 
Install Java through [Download](https://java.com/en/download/)

> Click  **Agree and Start Free download and install java globally**
## Step 2
### Selenium Server Configuration
Configure selenium server by following the steps!
```
npm install selenium-standalone@latest -g
```
```
selenium-standalone install
```
```
selenium-standalone start
```

## Step 3
### Getting started

Create a **test folder** and under this run :

```
git clone https://github.com/Rink9/E2E_Testing_DOKAN_Lite.git
```
```
composer install
```
```
composer dumpautoload -o
```

## Step 4
## Configuration
 
> Open test folder on visual studio or your favourite Code Editor!

 - Open **`codecept.conf.js`** file.
 - Provide your test Url eg: https://rinky.test]
 - Provide your test site Username 
 - Provide your test site Password
 
Run:
```
npm install
```

## Step 5

## Running Tests!

**`Here you go !`**

Run:
>**`npx codeceptjs run --grep "@environmentSetup" `**
