Great! Here’s the updated README file for **Games Saga**:

---

# 🎮 Games Saga

Welcome to **Games Saga**! 🚀 This project is a dynamic game launcher that allows users to play a variety of games through a single web interface. Instead of creating separate pages for each game, users can select a game, and it will be loaded dynamically in an iframe on the game page. This approach minimizes the need for multiple HTML files and provides a seamless gaming experience.

---

## 📝 Features

- **Dynamic Game Loading**: Play any game by selecting it from the list. The game will be loaded dynamically in an iframe.
- **Fallback Video**: If a game cannot be loaded, a looping video will play as a fallback.
- **Responsive Design**: The site is designed to be responsive and user-friendly on various devices.

---

## 📂 Project Structure

- `index.html`: The main page where users can select a game.
- `gamePage.html`: The page that loads the selected game or fallback video.
- `assets/`: Contains images and video files used in the project.
- `data/games.json`: JSON file containing game URLs and other related data.

---

## 🔧 How It Works

1. **Game Selection**: Users click a button associated with a game.
2. **Redirect to Game Page**: The button redirects users to `gamePage.html` with the game URL passed as a query parameter.
3. **Game Loading**: `gamePage.html` attempts to load the game in an iframe. If the game fails to load, a fallback video is displayed.

---

## 🚀 Getting Started

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/MustafaPinjari/GameSaga.git
    cd GameSaga
    ```

2. **Open `index.html`** in your browser to view the game selection page.

3. **Select a Game**: Click on any game button to be redirected to the game page.

---

## 📄 JSON Data Format

The `data/games.json` file should have the following format:

```json
{
  "games": [
    {
      "id": "1",
      "title": "Game 1",
      "url": "https://example.com/game1.html"
    },
    {
      "id": "2",
      "title": "Game 2",
      "url": "https://example.com/game2.html"
    }
    // Add more games here
  ]
}
```

---

## 🛠️ Tools & Technologies

- HTML
- CSS
- JavaScript
- JSON

---

## 📧 Contact

For any questions or suggestions, feel free to reach out to me:
- [LinkedIn](https://www.linkedin.com/in/mustafa-pinjari-287625256/)
- [GitHub](https://github.com/MustafaPinjari)
- [Instagram](https://www.instagram.com/its_ur_musuuu)
- Email: unlessuser99@gmail.com
