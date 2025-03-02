# Coin Toss Game

## About This Project

I built this **Coin Toss Game** using React, where users can toss a virtual coin and track the number of heads and tails. The game randomly generates the toss result and updates the count accordingly.

### Features

- Displays an initial screen with a heads image and count values set to **0**.
- Clicking the **Toss Coin** button generates a random toss result.
- The result updates the displayed image and increments the respective counters.
- Tracks the total number of tosses along with separate counts for heads and tails.

## How I Built It

This project was built using **React.js** with component-based development. The key implementation details include:

- Used **React State** to manage the count of heads, tails, and total tosses.
- Generated toss results using:
  ```js
  const tossResult = Math.floor(Math.random() * 2);
  ```
- Updated the UI dynamically based on state changes.
- Styled the components using **CSS**.

## How to Use This Repository

### Installation and Setup

To run this project locally, follow these steps:

1. Clone this repository:
   ```sh
   git clone https://github.com/sureshnenavath/Coin-Toss-Game-React-cp14.git
   ```
2. Navigate into the project directory:
   ```sh
   cd coin-toss-game
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open your browser and go to `http://localhost:3000/` to play the game.

## Project Structure

The main files involved in this project are:

- `src/components/CoinToss/index.js` - Main component logic.
- `src/components/CoinToss/index.css` - Styling for the game.

## Resources Used

- **React.js** for UI development.
- **CSS** for styling.
- **Math.random()** for generating random toss results.

Feel free to fork, modify, and contribute to this project. Happy coding! 🚀

