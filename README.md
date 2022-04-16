# To do list app with react

This app has been created with React js.

## About project

This project has been created to learn reactjs practicing with a real useful tool, moreover it has allowed me to understand concepts about programming logic and how to implement important tool as react hooks.

Also it is included the use of packages that has been installed by npm, descriptions are below.

## React icons

It was installed a library called React icons by running the following command

npm install react-icons --save

Once the package is installed all icons can be used making an import and calling the element like any react element, for instance

To import the element

import { name_Of_Icon } from "react-icons/ai";

To use icon in jsx structure

<name_of_icon />

## Id creation package uuid

The creation of id is managed by uuid packed installed by npm running the command

npm install uuid

To use the package in the project it has to be imported by: 

import { v4 as uuidv4 } from 'uuid';

An then to set the id number yo need to call the function:

uuidv4();
