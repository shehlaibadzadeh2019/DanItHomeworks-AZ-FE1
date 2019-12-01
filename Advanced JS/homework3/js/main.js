class createGame {

    startButton () {
            const body = document.getElementById('whackMole');
            const btn = document.createElement('button');
            btn.innerText = 'Start';
            btn.id = 'start';
            body.append(btn);
        }

    calculateScore () {
        const score = document.createElement('div');
        this.scores = document.createElement('h2');
        this.scores.id = 'score';
        score.append(this.scores);
        this.page.append(score);
    }

    game () {
        this.startButton();
        this.calculateScore();
    }
}


class playGame extends createGame{

    constructor () {
        super();
        this.time = false;
        this.page = document.getElementById('whackMole');
        this.cells = document.querySelectorAll('td');
        this.start = false;
        this.speed = 1500;
        this.array = [1,2];
        this.greenCells = 0;
        this.redCells = 0;
        this.score = 0;
    }

    startStopBtn () {
        this.start = document.getElementById('start');
        this.start.addEventListener('click', () => {

            if ( this.start.textContent === 'Start' ) {
                this.start.textContent = 'Stop';
                this.colorCell();
            } else {
                this.endGame();
                this.start.textContent = 'Start';
                clearInterval(this.time);
            }
        });
    }

    setLevel () {

        const easy = document.getElementById('easy');
        easy.addEventListener('click', () => { this.speed});

        const medium = document.getElementById('medium');
        medium.addEventListener('click', () => { return this.speed = 1000});

        const hard = document.getElementById('hard');
        hard.addEventListener('click', () => { return this.speed = 500});
    }

    randomCellFind () {

        function checkNumber(arr) {
            let number = Math.floor(Math.random() * 100);
            for (let i = 0; i < arr.length; i++) {
                if ( arr[i] == number) {
                   return checkNumber(arr);
                }
            }
            arr.push(number);
            return number;
        };
        let num = checkNumber(this.array);
        return num;
    }



    colorCell () {
        const cells = document.querySelectorAll('td');
        let randNum = this.randomCellFind();
        let cell = cells[randNum];

        cell.classList.add('active');

        cell.onclick = () => {
            if (cell.classList.contains('active') ) {
                cell.classList.add('greenCell');
                this.greenCells++
            }
        };

        this.time = setTimeout ( () => {

            cell.classList.remove('active');
            if (!cell.classList.contains('greenCell')) {
                cell.classList.add('redCell');
                this.redCells++;
            }
            this.colorCell();

        } , this.speed);

            this.showScore();
            this.checkWinner();
            this.endGame();
    }



    endGame () {
        this.cells = document.querySelectorAll('td');
        if ( this.greenCells >= (this.cells.length / 2) || this.redCells >= (this.cells.length / 2) ) {
            clearTimeout(this.time);
            this.checkWinner();
            this.showWinner();
            this.start.textContent = 'Start';
            this.clearTable();
        }
    }

    checkWinner () {
        if ( this.greenCells > this.redCells) {
            this.winner = "User";
        } else { this.winner = "Computer"; }
    }

    showWinner () {
        this.winnerShow = document.createElement('h2');
        this.winnerShow.innerText = `Score: User - ${this.greenCells} : Computer - ${this.redCells}`;
        this.page.append(this.winnerShow);
        alert(`Winner - ${this.winner}`)
    }

    showScore () {
        this.score = document.getElementById('score');
        this.score.textContent = `User - ${this.greenCells} : Computer - ${this.redCells}`;
    }

    clearTable () {
        this.cells.forEach( (item) => { item.classList.remove('greenCell', 'active', 'redCell') });
        this.greenCells = 0;
        this.redCells = 0;
        this.score.textContent = `User - ${this.greenCells} : Computer - ${this.redCells}`;
    }


    init () {
        super.game();
        this.startStopBtn();
        this.setLevel();
        this.showScore ();
    }
}

let play = new playGame();

play.init();

