# 160Final 
(This project can also be accessed at https://github.com/dnalexander/160Final)
This project was written on a Windows 7 desktop and a Windows 8 laptop using JetBrains' WebStorm and AptanaStudio3. It was tested using Google Chrome. 
There is no required method to compile the code, simply open final.html in the code directory and the project will be presented to you.
Directories:
-code
  +this directory contains the code necessary to display the project
  +init.js
    *this file initializes global variables to be used by other files and functions
  +final.html
    *this file handles the HTML necessary to run and display the project
  +finalUtils.js
    *this file contains many functions used by other files and the buttons that the HTML file contains
  +three.js
    *this file is the JavaScript API that made this project possible
  +loads.js
    *this file contains the loading functions to ensure the model gets loaded in the proper order

-report
  +this directory contains the report components
  +report.html
    *this file contains a description and user guide to the project
  +rendered.jpg
    *this picture displays the lamp after being created, but prior to any manipulation
  +demoed.jpg
    *this picture displays the lamp after being loaded and transformed using the Demo Links button provided
  +demo.mpeg
    *this video displays the loading of the lamp, and a demonstration of the functionality of some of the buttons

-data
  +this directory contains the model data
  +[*].obj
    *these files are exported from blender and contain the necessary model information for that part of the lamp
      they are then converted using a Three.JS utility to be read as a JSON Object
  +[*].mtl
    *these files are exported from blender and contain the material information for that part of the lamp
      they are then used by the same Three.JS utility that converts the [*].obj files; they are not used in the project
  +[*].js
    *these files are JSON Object files that contain vertex and face information for each part of the lamp
      they are loaded by the Three.JS utility and added to the project's scene as meshes
  +lamp_joined.blend
    *this file is the Blender file of the lamp and its multiple parts