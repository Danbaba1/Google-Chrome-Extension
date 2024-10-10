# Google-Chrome-Extension

This project is a simple web application that cycles through a series of images and includes an animated text element. It uses jQuery for DOM manipulation and animations.

## Features

1. Animated text display
2. Automatic image cycling
3. (Commented out) Manual image cycling with button click

## Installation

1. Ensure you have jQuery included in your project.
2. Copy the provided JavaScript code into your project's script file.
3. Make sure you have the necessary HTML structure in place, including an element with the ID "content" and its parent element.

## Usage

The script performs the following actions:

1. Removes the element with ID "content".
2. Adds an animated text span to the page.
3. Prepends a section with an image and a button to the parent of the removed "content" element.
4. Automatically cycles through a predefined list of images every 1.5 seconds.

## Image List

The script uses an array of image filenames. Ensure these images are present in an `/images/` directory relative to your HTML file:

- image-1.jpg to image-13.jpg

## Customization

- To change the animation duration or properties, modify the `animate()` function call.
- To adjust the image cycling speed, change the interval in the `setInterval()` function (currently set to 1500 milliseconds).
- To use manual cycling instead of automatic, uncomment the button click event listener code and comment out the `setInterval()` function.

## Dependencies

- jQuery (version not specified in the provided code)

## Notes

- The code assumes specific HTML structure. Ensure your HTML matches the expected structure for the script to work correctly.
- The manual image cycling feature is currently commented out. Uncomment and adjust as needed if you prefer button-controlled cycling.
