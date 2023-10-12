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
        this.marker = marker;
    }

    getMarker() {
        return this.marker;
    }
}

class XOMarker {
    clickedGrids = [""];

    constructor(gridID) {
        this.gridID = gridID;
    }

    toggleMarker(inputMarker) {
        if(!this.clickedGrids.includes(this.gridID)) {
            const marker = document.createElement('h2');
            marker.classList.add('marker');
            marker.textContent = inputMarker;
            marker.style.fontSize = '400%';
            marker.style.textAlign = 'center';
            this.clickedGrids.push(this.gridID);
            return marker;
        }
    }
}

class Marker {
    
    add(inputMarker) {
        const section = document.querySelectorAll('.section');
        section.forEach((grid) => {
            grid.addEventListener('click', (e) => {
                const identifyMarker = new XOMarker(e.target.id);
                const output = identifyMarker.toggleMarker(inputMarker);
                grid.appendChild(output);
            });
        });
        return section;
    }
}

function displayController() {

    const playerOne = new Player('Player-X', 'X');
    const playerTwo = new Player('Player-O', 'O');

    const board = new GameBoard();
    board.generate();

    const marker = new Marker();
    marker.add(playerOne.getMarker());
}

displayController();