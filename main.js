var mapCol = 90;
var mapRow = 90;

var playerPosition = [0, 0];
var gameStatus = false;
var squares = document.getElementsByClassName("square");

function startGame() {
    if (gameStatus == true) {
        var playerP = postionPlayerSquare();
        squares[playerP].classList.remove("player");
        playerPosition = [0, 0];
    }
    squares[0].classList.add("player");
    gameStatus = true;
}

mapGenerate();
function mapGenerate() {
    var body = document.body;
    const div = document.createElement("div");
    div.id = "map";
    div.style.gridTemplateColumns = `repeat(${mapCol / 10}, 10vh)`;
    div.style.gridTemplateRows = `repeat(${mapRow / 10}, 10vh)`;
    div.style.width = mapCol + "vh";
    div.style.height = mapRow + "vh";
    body.appendChild(div);

    for (let lin = 0; lin < mapRow / 10; lin++) {
        for (let col = 0; col < mapCol / 10; col++) {
            const div = document.createElement("div");
            div.className = "square";
            div.setAttribute("position-row", lin);
            div.setAttribute("position-col", col);
            map.appendChild(div);
        }
    }
}

window.addEventListener(
    "keydown",
    event => {
        switch (event.code) {
            case "KeyD":
                if (playerPosition[1] < mapCol) {
                    oldPositionPlayer = postionPlayerSquare();
                    playerPosition[1] = playerPosition[1] + 1;
                    newPositionPlayer = postionPlayerSquare();
                    movPlayer(oldPositionPlayer, newPositionPlayer);
                }
                break;
            case "KeyA":
                if (playerPosition[1] > 0) {
                    oldPositionPlayer = postionPlayerSquare();
                    playerPosition[1] = playerPosition[1] - 1;
                    newPositionPlayer = postionPlayerSquare();
                    movPlayer(oldPositionPlayer, newPositionPlayer);
                }
                break;
            case "KeyW":
                if (playerPosition[0] > 0) {
                    oldPositionPlayer = postionPlayerSquare();
                    playerPosition[0] = playerPosition[0] - 1;
                    newPositionPlayer = postionPlayerSquare();
                    movPlayer(oldPositionPlayer, newPositionPlayer);
                }
                break;
            case "KeyS":
                if (playerPosition[0] < mapRow) {
                    oldPositionPlayer = postionPlayerSquare();
                    playerPosition[0] = playerPosition[0] + 1;
                    newPositionPlayer = postionPlayerSquare();
                    movPlayer(oldPositionPlayer, newPositionPlayer);
                }
                break;
        }
    },
    true
);

function movPlayer(oldPostion, newPostion) {
    squares[oldPostion].classList.remove("player");
    squares[newPostion].classList.add("player");
}

function postionPlayerSquare() {
    for (let index = 0; index < squares.length; index++) {
        var square = squares[index];
        var squareRow = square.dataset.positionRow;
        var squareCol = square.dataset.positionCol;

        if (squareRow == playerPosition[0] && squareCol == playerPosition[1]) {
            var positionPlayer = index;
            break;
        }
    }
    return positionPlayer;
}
