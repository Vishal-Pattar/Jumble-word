# Jumble Word Solver

The Jumble Word Solver is a web application that allows users to input a set of letters and find all possible word permutations that meet specified criteria, such as starting or ending with certain letters, containing specific characters, or having a certain length.

## Features

- Input letters to find all possible permutations.
- Filter results based on:
  - Starting letters
  - Ending letters
  - Minimum length
  - Exact length
  - Contained characters
- Simple and intuitive user interface.

## Screenshot

<img src="https://github.com/Vishal-Pattar/Jumble-word/assets/104265753/02e69421-5dd3-433c-a88e-895c77d1c133" alt='Jumble Word Solver Screenshot' height='450px' width='600px'/>

## Live Demo

Check out the live demo [here](https://vishal-pattar.github.io/Jumble-word/).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Vishal-Pattar/Jumble-word.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Jumble-word
   ```
3. Open `index.html` in your web browser.

## Usage

1. Enter your letters into the input box.
2. Optionally, fill in the filters:
   - **Starts**: Words that start with this string.
   - **Ends**: Words that end with this string.
   - **Min Length**: Minimum length of the word.
   - **Length**: Exact length of the word.
   - **Contains**: Words that contain these characters.
3. Click on the "Search Here" button.
4. The results will be displayed below, showing all valid permutations.

## Code Overview

### HTML

- **index.html**: The main HTML file containing the structure of the web application.

### CSS

- **style.css**: Contains the styles for the web application.

### JavaScript

- **dictionary.js**: Contains the dictionary data and the binary search function to check if a word exists in the dictionary.
- **permutation.js**: Contains functions for generating permutations, combinations, and applying filters to find valid words.

## Acknowledgements

- Designed and developed by Vishal Pattar.
- Inspired by the need for a powerful jumble word solver.
