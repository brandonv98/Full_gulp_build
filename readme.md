# Full gulp pipeline build.
Full gulp pipeline build, for developers.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.  


## Prerequisites
What dependencies you need to install the software and how to install them as followed

1. **Npm** - npm makes it easy for JavaScript developers to share and reuse code, and makes it easy to update the code that you’re sharing, so you can build amazing things.
   - Learn more : https://www.npmjs.com/get-npm

2. **gulp** - gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.
   - Learn more : https://gulpjs.com/ 


3. **Homebrew** - Homebrew installs packages to their own directory and then symlinks their files into /usr/local.
   - Learn more - https://brew.sh

* Recommended install with **brew**.
   - past the following into your Terminal  
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**Install nodeJS & npm with brew** : past the following into your terminal
```
$ brew install node
```
* After install is complete check install using the following in your terminal.  
For **node** - ```node -v``` this will print out a version number like this ```v10.6.0```.  
Now do the same for **npm** as followed ```npm -v``` output will look something like this ```6.2.0```.

> To learn more please visit - [node & npm install.](http://blog.teamtreehouse.com/install-node-js-npm-mac)

___

## Installing
A step by step series of examples that tell you how to get a development env running  
### 1. Step One  
  In your project root dir ***('./')*** use the following command in your terminal.
```
$ git clone https://github.com/brandonv98/Full_gulp_build.git
```
### 2. Step Two
  Once you have cloned the repo ```$ cd/Full-gulp-build ``` from here type ```$ npm install ``` to install all of the project dependencies.
### 3. Step Three
  Once completed run the following command to build out the project.
  ```
  $ gulp build
  ```
  ### Testing local web server
    ``` $ gulp serve ```
### 4. Step Four 
  Back in the project, open the index.html file.
___


### Deployment
 ```$ gulp build ```

___

## Built With
**[gulp](https://gulpjs.com/)** - gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.


___

## Authors
* **Brandon VanCamp** - [WebSite](https://csdevs.io/)

___

## License
![MIT](https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667)  

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.  
Yay Free software!

