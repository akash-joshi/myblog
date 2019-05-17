---
title: Publishing a JavaScript Library Online - The Definitive Guide
status: draft
---

# Publishing a JavaScript Library Online : The Definitive Guide

![Header Image](/pic2.png)

This is a continuation of my [previous guide](/boiler-npm.html). Refer it to learn how to publish code to npm

This article focuses on publishing code for use in a **browser**.


There will be 2 sections to this guide :
1. Publishing browser-native code :globe_with_meridians:
2. Converting an npm module for use in a browser :arrows_clockwise:

For both cases, we will eventually deploy the code to **npm** to leverage the power of the free CDN [unpkg](http://unpkg.com)

## 1. Publishing browser-native code :globe_with_meridians:

This one is easier. As the code is already in browser-usable format, it just needs to be included in the HTML code via the ```<script>``` tags.

This will make its variables and functions available to the browser automatically.

To publish it to a CDN :

1. Use ```npm init -y``` to initialize a ```package.json``` for the repository.

2. Publish it to npm via the steps given here : [Steps to Publish](/boiler-npm.html#_3-publishing-and-using-your-module)

3. Navigate to ```unpkg.com/repository-name``` according to the repository name provided by you while publishing to ```npm```. This is the CDN auto-generated from npm.

4. If you get your desired file, you can use it in the browser via ```<script>``` tags. If you get a file directory structure, simply navigate to the desired file and include it in your frontend via ```<script>``` tags.

5. Access your variables and functions directly by name

## 2. Converting an npm module for use in a browser :arrows_clockwise:

**Browserify** bundles all the dependencies of your js file into a single file, and exports a **variable** to ```window``` for use within the browser.

1. Install Browserify ```npm add browserify -g```.

2. To generate your browser usable file, do

```browserify ./main.js -o ./bundle.js -s variableName```

Here, ```main.js``` is the file you want to use in browser,

```-o``` flag is used to define the location of the output file, and

```-s``` flag is used to define the variable name exported to the browser

3. Publish to npm including your bundled JS file. Navigate to ```unpkg.com/repository-name``` to access the CDN generated for your repo.

4. If you get your desired file, you can use it in the browser via ```<script>``` tags. If you get a file directory structure, simply navigate to the desired file and include it in your frontend via ```<script>``` tags.

5. Access your code via the variable name that you exported.

That's it, you successfully published your JS library :tada: !

Pat yourself on the back, you earned it :satisfied: !

<a href="https://www.buymeacoffee.com/akashjoshi" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

Get in touch !! : 

[Github](https://www.github.com/akash-joshi) [LinkedIn](https://www.linkedin.com/in/akash-s-joshi) [Twitter](https://twitter.com/iamkrusty)
