let round = 1;
let clickedGrids = [""];
let XGrid = [];
let OGrid = [];
let winningCombination =  [
    [1,2,3],
    [1,5,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [3,5,7],
    [4,5,6],
    [7,8,9]
];
let XWin = false;
let OWin = false;
class GameBoard {
    generate() {
        const board = new Array(9).fill("");
        const container = document.getElementById('container');
        for(let i = 0; i < board.length; i++) {
            let section = document.createElement('div');
            section.classList.add('section');
            section.setAttribute('id', i+1);
            container.appendChild(section);
        }
        return container;
    }
}

class Player {
    constructor(player, marker) {
        this.player = player;
        this.marker = marker
    }

    setMarker(currMarker) {
        return this.marker = currMarker;
    }

    getMarker() {
        return this.marker;
    }

    nextRound() {
        return round++;
    }
}

class XOMarker {
    constructor(gridID) {
        this.gridID = gridID;
    }

    toggleMarker() {
        const player = new Player('player','O');
        const result = new Result();

        if(!clickedGrids.includes(this.gridID)) {
            const marker = document.createElement('h2');
            marker.classList.add('marker');
            if(round % 2 !== 0) {
                marker.textContent = 'X';
                XGrid.push(parseInt(this.gridID));
                result.checkCombination();
                player.setMarker('O');
                player.nextRound();
            }
            else {
                marker.textContent = 'O';
                OGrid.push(parseInt(this.gridID));
                result.checkCombination();
                player.setMarker('X');
                player.nextRound();
            }      
            clickedGrids.push(this.gridID);
            return marker;
        }
    }
}

class Marker {   
    add() {
        const section = document.querySelectorAll('.section');
        section.forEach((grid) => {
            grid.addEventListener('click', (e) => {
                const identifyMarker = new XOMarker(e.target.id);
                const output = identifyMarker.toggleMarker();
                if(output !== undefined)
                    grid.appendChild(output);
            });
        });
        return section;
    }
    disable() {
        const section = document.querySelectorAll('.section');
        section.forEach((grid) => {
            grid.removeEventListener('click', this.add);
        });
    }
}

class Result {
    checkCombination() {
        if(XGrid.length >= 3 || OGrid.length >= 3) {
            for(let combination of winningCombination) {
               if(XGrid.every(item => combination.includes(item))) {
                XWin = true;
                disableGrid();
                break;
               }
               else if(JSON.stringify(OGrid.sort()) === JSON.stringify(combination)) {
                OWin = true;
                disableGrid();
                break;
               }
            }
        }
        printResult();
    }
}

function displayController() {
    const board = new GameBoard();
    board.generate();

    const marker = new Marker();
    marker.add();
}

displayController();

function printResult() {
    const section = document.getElementById('result');
    const result = document.createElement('p');
    if(XWin) {
        result.textContent = 'X WON!';
        section.appendChild(result);
    }
    else if(OWin) {
        result.textContent = 'O WON!';
        section.appendChild(result);
    }
    else if(round === 9){
        result.textContent = 'Tie!';
        section.appendChild(result);
    }
}

function disableGrid() {
    const lockGrid = new Marker();
    lockGrid.disable();
}

const restart = document.getElementById('restart');
restart.addEventListener('click', () => {
    window.location.reload();
})
