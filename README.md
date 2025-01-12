# Decoder Ring Project

A web application that uses 3 different ciphers (Caesar, Polybius square, and substitution) to encode/decode messages.

## Features

 - **Caesar Shift cipher:** Uses a number to shift/unshift letters based on the number.
 - **Polybius Square cipher:** A cipher that arranges the alphabet into a grid, with each letter being assigned a number.
 - **Substitution cipher:** Uses 26 different characters to create a "substitution" alphabet to encrypt/decrypt messages.
 - **User-friendly Interface:** Easy to use interface with clear instruction on how to use the application.
 - **Error Handling:** Robust error handling for enhanced reliability.

## Technologies Used

  * **JavaScript:** Core programming language (JavaScript ES6)
  * **HTML:** Displays the content of the application
  * **Bootstrap:** Provides visual styling for the application
  * **Chai:** Unit testing framework

## Screenshot

![Alt text](https://github.com/jlee55504/Decoder-ring-project/blob/main/imgs/Caesar%20cipher%20image.png?raw=true "The Caesar cipher")

## Getting Started

### Prerequisites

 - Live Server Package
 - Visual Studio Code
 - Node Package Manager (NPM)

 ### Installation:
 
  1. Clone the repository:
     ```
      git clone https://github.com/jlee55504/Decoder-ring-project.git
     ```
  2. Navigate to the project directory:
     ```
      cd Decoder-ring-project
     ```
  3. Build the project:
     ```
     npm install
     ```
  4. Run the application:
     ```
      npm start
     ```

## Usage

Upon running the application, you'll be presented with 3 different ciphers:
 1. Caesar Shift
 2. Polybius Square
 3. Substitution

Follow the instructions for each cipher, choose either the "encode" or "decode" button, enter your message in the "Your message" space, and click the "Submit" button. 

## Code Structure

 - **index.html:** Main application entry point
 - **src/caesar.js:** Handles the Caesar Shift cipher functionality
 - **src/polybius.js:** Handles the Polybius Square cipher functionality
 - **src/substitution.js:** Handles the Substitution cipher functionality

## Acknowledgments

 - This project was built for the Chegg Skill's software engineering program
 - I went beyond Chegg Skill's coding requirements by writing code for the Polybius Square cipher that maintains spaces in messages and displays a message along with instructions if incorrect characters are used.
