const VICTORY_POINTS = 10;
const ANIMATION_TIMES = 10;
const INTERVAL_TIME = 200;
const REMOVE_TIME = 150;

let noWinner = true;
let roundNumber = 0;
let pointsPlayer = 0;
let pointsPC = 0;

const figures = [{
    figureClass: 'player-selection-rock',
    figureName: 'Rock',
    beats: 'Scissors'
},
{
    figureClass: 'player-selection-paper',
    figureName: 'Paper',
    beats: 'Rock'
},
{
    figureClass: 'player-selection-scissors',
    figureName: 'Scissors',
    beats: 'Paper'
}];

const roundResults = {
    winPlayer: 'You won!',
    winPC: 'You lost!',
    tie: `It's a tie!`
};

const $roundCounter = document.querySelector('.round-counter');
const $containerPlayer = document.getElementsByClassName('player-selection-container')[0];
const $containerPC = document.getElementsByClassName('player-selection-container')[1];
const $footerPlayer = document.querySelectorAll('footer')[0];
const $footerPC = document.querySelectorAll('footer')[1];
const $resultPlayer = document.querySelectorAll('.player-result')[0];
const $resultPC = document.querySelectorAll('.player-result')[1];
const $playerFigures = document.querySelectorAll('.player-selection');
const $roundResult = document.querySelector('.round-result');
const $btn = document.querySelector('.btn-reset');

$containerPlayer.addEventListener('click', startRound);
$btn.addEventListener('click', reset);

function reset() {
    location.reload();
}

function startRound(e) {
    if (e.target.classList.contains('player-selection') && noWinner) {
        for (let i = 0; i < $playerFigures.length; i++) {
            $playerFigures[i].classList.remove('player-selection-choosen');
        }
        $roundCounter.innerHTML = `Round ${++roundNumber}`;
        $containerPC.innerHTML = '';
        e.target.classList.add('player-selection-choosen');
        $footerPC.innerHTML = '';
        let targetClass = e.target.classList[1];
        $footerPlayer.innerHTML = `Your choice: ${figures.find(figure => figure.figureClass === targetClass).figureName}`;
        makeChoicePC(targetClass);
        $btn.classList.add('btn-reset-visible');
    }
}

function makeChoicePC(targetClass) {
    let counter = 0;
    const $choiceFigurePC = document.createElement('div');
    $choiceFigurePC.classList.add('player-selection');
    $containerPC.append($choiceFigurePC);

    const interval = setInterval(() => {
        const randomChoise = pickRandomChoice();
        $choiceFigurePC.classList.add(figures[randomChoise].figureClass);

        counter++;
    
        if (counter < ANIMATION_TIMES) {
            setTimeout(() => {
                $choiceFigurePC.classList.remove(figures[randomChoise].figureClass);
            }, REMOVE_TIME);
        }

        if (counter >=  ANIMATION_TIMES) {
            $footerPC.innerHTML = `PC selected: ${figures[randomChoise].figureName}`;
            pickRoundWinner(figures.find(figure => figure.figureClass === targetClass).figureName, figures[randomChoise].figureName);
            clearInterval(interval);
        }
    }, INTERVAL_TIME);
}

function pickRandomChoice() {
    let choicePC = Math.floor(Math.random() * figures.length);
    return choicePC;
}

function pickRoundWinner(figurePlayer, figurePC) {
    if (figurePlayer === figurePC) {
        updateInfo(++pointsPlayer, ++pointsPC, roundResults.tie);
    }
    else if (figures.find(figure => figure.figureName === figurePlayer).beats === figurePC) {
        updateInfo(++pointsPlayer, pointsPC, roundResults.winPlayer);
    }
    else {
        updateInfo(pointsPlayer, ++pointsPC, roundResults.winPC);
    }
}

function updateInfo (pointsPlayer, pointsPC, roundResult) {
    $roundResult.innerHTML = roundResult;
    $resultPlayer.innerHTML = pointsPlayer;
    $resultPC.innerHTML = pointsPC;
    if (pointsPlayer == VICTORY_POINTS || pointsPC == VICTORY_POINTS) {
        pickGameWinner();
    }
}

function pickGameWinner() {
    if (pointsPlayer == VICTORY_POINTS && pointsPC == VICTORY_POINTS) {
        showWinner($containerPlayer);
        showWinner($containerPC);
    }
    else if (pointsPlayer == VICTORY_POINTS) {
        showWinner($containerPlayer);
    }
    else if (pointsPC == VICTORY_POINTS) {
        showWinner($containerPC);
    }
}

function showWinner($container) {
    $container.innerHTML = '';
    const $victoryCup = document.createElement('div');
    $victoryCup.classList.add('player-selection', 'player-selection-victory');
    $container.append($victoryCup);
    $btn.innerHTML = 'Play again';
    noWinner = false;
}
