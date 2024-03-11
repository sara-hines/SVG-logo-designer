# SVG Logo Designer

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This SVG logo designer is a Node.js command-line application to generate an SVG logo based on user input. This application is a great way for beginner developers, content creators, and people new to SVG to start learning the basics of SVG shapes and easily generate their own logos. As a file format, SVG is superior to other image formats in many respects—SVG images are scalable, can create high quality prints at any resolution, and do not loose quality if they are resized or zoomed. If you're a developer or content creator, it would likely be advantageous and economical to familiarize yourself with SVG rather than lease out this skill set to other professionals. 

The application is designed for a smooth user experience. The prompts are specific enough to avoid invalid input and errors. In the unlikely case that there is an error created during your process of running the application, there will be a clear, actionable error message to help you successfully create a logo meeting your criteria. The file structure of the repository is easy to navigate: the index.js is located in the root of the repository; the classes and functions used by index.js are located in Develop/lib; the tests for the application are located in Develop/\_\_tests__; and there are plenty of example logos for inspiration in Develop/examples. If you would like to fork the repository and customize the classes and functions to your liking, the code is well-commented to help you jump right in. 

If you're interested in learning more about SVG graphics, this is a great place to start. The application as-is generates logos with 4 areas of customization: 
* text content of the logo (a 1-3 character string)
* text color (a standard web color, provided as a color keyword such as "midnightblue" or hexadecimal value such as #FF0000)
* the shape for the logo (circle, triangle, or square)
* shape fill color (a standard web color, provided as a color keyword such as "midnightblue" or hexadecimal value such as #FF0000)

After running the application, take a look at the logo.svg file generated to see where the variables are impacting the SVG code. From there, feel free to start changing the size and positioning of the shape and text, adding a stroke around the edge of the shape, or using filters to manipulate light and shadow effects. Radial gradients, opacity, and SVG scripting could help you take your logo and SVG skills to the next level. [W3Schools's SVG Tutorial](https://www.w3schools.com/graphics/svg_intro.asp) would be a wonderful resource to learn more about options for increasingly sophisticated SVG design.

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[Features](#features)

[Tests](#tests)

[Contributing](#contributing)

[Credits](#credits)

[Questions](#questions)

[License](#license)

## Installation

* In order to run the application, Node.js must be installed. Click [here](https://nodejs.org/en/download/) to be navigated to the website to install Node.js. It is recommended to use the Latest LTS Version of Node for this project (20.11.1 at the time of writing, which includes npm 10.2.4). 
* Clone or fork this repository. 
* In the command line, navigate to the Develop directory within the repository. The Develop directory will already contain the package.json and package-lock.json files. In the package.json, Inquirer 8.2.4 will be listed as a dependency, and Jest 29.7.0 and validate-color 2.2.4 will be listed as devDependencies. 
* Run `npm install` in order to install all dependencies and devDependencies. A directory named node_modules will be created, containing all of the node modules necessary for the application. 
* To run the application, type `node index.js` in your terminal and press enter. 

## Usage

The following steps will take you through the process of generating your own logo, or feel free to follow the walkthrough video available [here](https://drive.google.com/file/d/1Gq35uSuovEv67Mf2v88mdbFCWPoFOjm5/view?usp=sharing). The walkthrough video shows 2 examples of valid user input and successful logo creation, and 4 examples of invalid user input which creates an error. 

After running `node index.js` from the command line, when the first prompt, "1. Please enter at least 1 and up to 3 characters for the text for your logo," appears, enter 1-3 characters for your logo's text (any case is fine) and press enter. When the next prompt, "2. Please enter the color for your logo's text, as either: a color keyword or a hexadecimal number beginning in #," appears, type a standard web color of your choice, as either a color keyword or hexadecimal value. (An example of a color keyword is such as "midnightblue" or "red", and an example of a hexadecimal value is #191970 or #FF0000.) For the next prompt, "3. Please choose one of the following shapes for your logo," use the arrow keys to navigate downward or upward through the list and hit enter once you have navigated to your chosen option. At the last prompt, "4. Please enter the fill color for the shape, as either: a color keyword or a hexadecimal number beginning in #," type a standard web color of your choice for the fill color of the shape. 

After answering the last prompt and hitting enter, you will see the message, "Generated logo.svg" in your terminal. Open the logo.svg file in the Develop folder to view your generated SVG. Preview the file in the browser to see the graphic!

## Features

When running the application from the command line, the prompts and your responses will be visible as you proceed through them. Assuming no invalid inputs or errors were encountered during the process, the message "Generated logo.svg" will appear after the last prompt is answered. See the below screenshot for an example of command line input which successfully creates a logo. 

![screenshot1](https://github.com/sara-hines/README-generator/assets/90005274/97348829-cf7a-450f-a390-ca0c78205323)

The application as-is allows the user to decide the values for 4 variables: `textForShape`, `textColor`, `shape`, and `shapeColor`. To view some examples of SVG code generated, and the SVG graphic it displays, reference the screenshots below. 

**Given:**

``{ textForShape: "RAM",
textColor: "green", 
shape: "circle", 
shapeColor: "yellow" }``

The SVG code in logo.svg will be:

``<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="yellow" />
    <text x="150" y="120" font-size="55" text-anchor="middle" fill="green">RAM</text>
</svg>``

And the logo will have the following appearance in the browser:

![screenshot2](https://github.com/sara-hines/README-generator/assets/90005274/2b098c87-59f0-4a56-8529-90b6aadf302d)


**Given:**

``{ textForShape: "Air",
textColor: "white", 
shape: "triangle", 
shapeColor: "#F33453" }``

The SVG code in logo.svg will be: 

``<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 270,190 30,190" fill="#F33453" />
    <text x="150" y="150" font-size="55" text-anchor="middle" fill="white">Air</text>
</svg>``

And the logo will have the following appearance in the browser:

![screenshot4](https://github.com/sara-hines/README-generator/assets/90005274/070a1672-2d1b-4418-8c21-6035af82c052)


**Given:**

``{ textForShape: "FED",
textColor: "#4B1587", 
shape: "square", 
shapeColor: "#F96400" }``

The SVG code in logo.svg will be: 

``<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="160" x="60" y="20" rx="2" ry="2" fill="#F96400" />
    <text x="140" y="120" font-size="60" text-anchor="middle" fill="#4B1587">FED</text>
</svg>``

And the logo will have the following appearance in the browser:

![screenshot3](https://github.com/sara-hines/README-generator/assets/90005274/833d1b3a-e4f1-4d79-8577-95616f6a2ae6)

If 0 or more than 3 characters are provided for the logo's text, or an invalid color keyword or hexadecimal value is provided for the text color or shape color, an error will be thrown. In the below screenshot, each response to the prompt is invalid in some way, and the error is thrown.

![screenshot5](https://github.com/sara-hines/README-generator/assets/90005274/3c99c8b0-44f7-46ec-b9a3-b28434ff8fdb)

Other errors would be thrown in certain cases, but as long as the user provides valid input for each prompt, and there are no issues with the environment running the application, it would be unlikely to encounter an error.

## Tests

In the Develop/\_\_tests__ folder, tests can be found for the Circle, Triangle, and Square subclasses and the generateSvg function. Each method of each of the subclasses renders one section of the SVG code necessary to create a logo. The generateSvg function combines the portions of rendered SVG into the final SVG code for the user's requested shape. 

The tests for the subclasses ensure that the correct portions of SVG code are created when given certain values for variables. Correspondingly, the test for the generateSvg function ensures that the final rendered SVG matches the final expected code when values are given for all of the variables.

To run the tests, after you have installed the dependencies, navigate to the \_\_tests__ directory and type `npm run test` in your terminal. The result should appear similar to the below. 

![screenshot6](https://github.com/sara-hines/README-generator/assets/90005274/9261b241-860b-4343-88a2-12c588031870)


## Contributing

If you would like to contribute, feel free to reach out to me at sara.marie.hines1@gmail.com. If you create an issue, please @ me. If you would like to make a pull request, please request a pull request review from me so that I can review your proposed changes. Thank you for your interest! 

## Credits

Thank you to my instructional team and cohort at DU's Full Stack Coding Bootcamp!

**Sources Referenced:**

MDN Web Docs. (2023, March 6). Basic shapes - SVG: Scalable Vector Graphics. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

MDN Web Docs. (2023b, November 18). Namespaces crash course - SVG: Scalable Vector Graphics. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course (Referenced when test SVG code was not working due to an incorrect namespace)

Stack Overflow. (2012, June 19). SVG image tag not working. Stack Overflow. https://stackoverflow.com/questions/11104324/svg-image-tag-not-working (Referenced when test SVG code was not working due to an incorrect namespace)

Vasile. (2018, August 7). SVG Triangle. CodePen. https://codepen.io/pukea/pen/YjOdKv (Referenced to get a better feel for SVG polygon points for triangles)

W3Schools. (2024). SVG rectangle. W3Schools. https://www.w3schools.com/graphics/svg_rect.asp (Referenced to help with creating an SVG square)

W3Schools. (2024b). SVG tutorial. W3Schools. https://www.w3schools.com/graphics/svg_intro.asp

## Questions

My GitHub username is sara-hines if you would like to connect or view my other projects. Feel free to reach out to me at https://github.com/sara-hines/ or sara.marie.hines1@gmail.com if you have any further questions about this project, and I'll be glad to assist.

## License

This project is covered under the MIT License. You can learn more about this license and its coverage and permissions [here](https://opensource.org/licenses/MIT).