---
title: 'Converting Your JS Boiler-Plate into NPM Modules : The Definitive Guide
'
---
# Converting Your JS Boiler-Plate into NPM Modules : The Definitive Guide

![Header Image](/pic1.png)


This guide has the following sections :
1. Structure your code for npm :bookmark_tabs:
2. File Structure for the module :file_folder:
3. Publishing and using your module :computer:

```Note  : This guide assumes that you have node and npm installed. I will be using module and package interchangeably to refer to your npm module.``` :smile:

## 1. Structure your code for npm :bookmark_tabs:

npm modules are pieces of code which can be included into your Node.js program by using **require()**. As far as **you**, the author are concerned, they are seperate Node.js programs on your file system, which **export** some function for other programs to use.

Consider your boilerplate JS :

```javascript
const dependency = require('dependency-name');
//list all requires required by your npm module

function yourFunction(args) {
    // operations
    return result;
}
```

You convert this code to an npm module by simply placing your function into a **module.exports** variable. In the following example, I will be placing the function in **const** to export it as a variable : 

```javascript
const dependency = require('dependency-name');
//list all requires required by your npm module

const yourFunction = (args) => {
    //operations
    return result;
}

module.exports = yourFunction;
```

That's it for the coding part ! :tada:

## 2. File Structure for the module :file_folder:

1. Create a new project folder with the name which you want to give your module and **cd** into it :
```sh
mkdir module-name
cd module-name
```

Place your newly created js file in this folder and rename it to your module name as 

```module-name.js```.

2. Use ```npm init``` and give answers to the questionnaire like **package-name,version**,etc. This creates a **package.json** file with your provided information. 

Finally, populate your package.json with the following fields to make your module SEO-friendly. 

```Note : Here, the 'main' field is important as it is the entry point of your module```

```json
{
  "name": "package-name",
  "version": "xx.xx.xx",
  "description": "your description",
  "main": "module-name.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your-git-url.git"
  },
  "keywords": [
    "your-keywords"
  ]
  ,
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "dependency-name": "version"
  },
  "homepage": "Your homepage"
}
```

## 3. Publishing and using your module :computer:

1. Go to [npmjs.com](https://www.npmjs.com) and create an account.

2. Run ```npm login``` and enter your username and password.

3. Now enter ```npm publish``` to have your code published to the **NPM** database.

Go to ```npmjs.com/your-package-name``` to view your package

4. If you want to update your package, simply change the 'package-version' in your **package.json** and run ```npm publish``` again.

To use your published module in any of your Node.js programs, simply install it using

```npm i your-package-name --save```

And finally, use your module by including it in your code via **require()** and then use your function directly. :smile:

```javascript
const dependency = require('your-package-name')

const desired_result = dependency(args)
```

<a href='https://ko-fi.com/B0B4MFVE' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=1' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

Get in touch !! : 

[Github](https://www.github.com/akash-joshi) [LinkedIn](https://www.linkedin.com/in/akash-s-joshi) [Twitter](https://twitter.com/iamkrusty)