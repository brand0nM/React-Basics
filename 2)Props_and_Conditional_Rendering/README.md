# Props and Conditional Rending
## Overview
Previously we imported/exported component functions to make up a static page, but the result were not reusable- every element of the component was hard-coded. Reacts answer is passing a Props object through the component function and giving the component attributes it will accept from the propsition. This too becomes tedious when an object need hunreds of attributes, so reacts {...Spread} method allows a component to accept any Spread objects attributes; in essence spreading all of the objects attributes over the component.

### Purpose
Use props to display Travel data and conditionally render if the trip was Abroad.

### Setup
After copying the projects contents to my-app's src, move the Images folder into the Public folder. Before we were manually importing each photo into our jsx app element then Rending it to the page, but for development ease we'll store the images locally and reference based on local path.

## Demo

https://user-images.githubusercontent.com/79609464/176149009-80c5bc9c-caa5-4ebc-be56-9a434c837495.mov

