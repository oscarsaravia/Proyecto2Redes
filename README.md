# 💻 Va de farol : React & Python with SocketIO

Va de farol - Networks Project 2

## 📜 Protocol Description

Read about all actions & payloads [HERE IF YOU ARE A MEMEBER OF UVG](https://docs.google.com/document/d/1ydFLZS3jXegwuDVR9brFGzKHL2En10w20EvCwYQPqvE/edit?usp=sharing)
or [HERE IF YOU DO NOT HAVE A UVG ACCOUNT](https://github.com/oscarsaravia/Proyecto2Redes/blob/main/protocol/Protocolo%20proyecto%202%20-%20Redes-1.pdf)

## 🎮 Online Game

[Play Online Game here!](https://farol-app.netlify.app/)

Our game app is quite easy to play. All the controls are intuitive and easy to understang. You can create your room and play Va de farol and share the id and play with at least 4 of your friends.

![game](https://github.com/oscarsaravia/Proyecto2Redes/blob/main/images/game-chat.png)

![game-chat](https://github.com/oscarsaravia/Proyecto2Redes/blob/main/images/game.png)

### **Demo**

[YouTube - Demo](https://youtu.be/dwxNB2DS8a8)

## 🏆 About Va de farol

Va de farol is a fun card game (like UNO) that can be played with a standard 52 card deck in this case 55 with 3 jokers. You need at least 2 people to play and only 4 players as top.

### **Starting the Game**

Typically 2 to 4 people play Va de farol. The all the deck is split between the players and the players turns are decided randomly by the server.

### **Playing the Game**

Players follow the turn order to place cards, the cards must go in the order specified on the screen even though as the cards are placed face down no other player knows what is being placed. If any person feels that the last turn player did not put the card that he played, he can say "Va de farol" (button on the left) and see if the last card was the one that he played. If the card is the one played by the player who accused, he takes all the cards on the table, if not, the player who tried to lie takes them all.

### **Winning the Game**

The first player to discard all their cards is the winner!

-> Read more at: [GAME](https://farol-app.netlify.app/) click on the question mark

## 🔩 How to run it (local)

1. Run npm install, to download all client dependencies
2. Enter server/ directory
3. create a virtual venv (optional) ```python -m venv venv```
4. run ```pip install -r requirements.txt
5. Open two terminals, one for the client and other for the server

### Server

```bash
cd server
python app.py
```

### Client

```bash
npm start
```

## Built with

This project features this tools

- ⚛ **[React JS](https://reactjs.org)** - Frontend
- 🚀 **[Vite](https://vitejs.dev/guide/)**  — Optimized Build
- 💅 **[SASS](https://sass-lang.com/documentation/)** — Styles
- 🕸️  **[SocketIO](https://socket.io/)** — Communication

### Difficulties and learning

- Be able to understand the handling of sockets between different programming languages.
- Develop a protocol that would work correctly according to the needs of the project implementation.
- Management of the different options offered by the chosen programming language to be able to carry out certain actions.

## Authors

| Raul Angel J. | Donaldo Garcia | Bryann Alfaro | Oscar Saravia |
| :---: |:---:|:---:|:---:|
| [![Raul Angel](https://avatars0.githubusercontent.com/u/46568595?s=200&u=c1481289dc10f8babb1bdd0853e0bcf82a213d26&v=4)](https://github.com/raulangelj)    | [![Donaldo Garcia](https://avatars1.githubusercontent.com/u/54748964?s=200&u=5e617360d13f87fa6d62022e81bab94ebf50c4e3&v=4)](https://github.com/donaldosebas)  | [![Bryan Alfaro](https://avatars0.githubusercontent.com/u/46506166?s=200&u=c1481289dc10f8babb1bdd0853e0bcf82a213d26&v=4)](https://github.com/bryannalfaro)    | [![Oscar Saravia](https://avatars0.githubusercontent.com/u/46576030?s=200&u=c1481289dc10f8babb1bdd0853e0bcf82a213d26&v=4)](https://github.com/oscarsaravia)    |
| <a href="https://github.com/raulangelj" target="_blank">`@raulangelj`</a> | <a href="https://github.com/donaldosebas" target="_blank">`@donaldosebas`</a> | <a href="https://github.com/bryannalfaro" target="_blank">`@bryannalfaro`</a> | <a href="https://github.com/oscarsaravia" target="_blank">`@oscarsaravia`</a> |
