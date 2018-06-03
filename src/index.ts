import { getLetter } from './module';

const container = document.getElementById('root');

interface Letter {
    el: HTMLElement;
}

const letters: Letter[][] = [];

const letterWidth = 16;
const letterHeight = 27;

const globals = {
    nCols: 0,
    nRows: 0,
};

const getColor = (row: number, col: number) => {
    const angle = Math.floor((col / globals.nCols) * 360);
    const lightness = Math.floor((row / globals.nRows) * 100);
    return `hsl(${angle},100%, ${lightness}%)`;
};

const setGlobals = () => {
    globals.nCols = Math.floor(container.clientWidth / letterWidth);
    globals.nRows = Math.floor(container.clientHeight / letterHeight);
};

const fillLetters = () => {
    container.innerHTML = '';
    for (const i of letters) {
        letters.pop();
    }
    for (let row = 0; row < globals.nRows; row++) {
        const thisRow: Letter[] = [];
        const rowElement = document.createElement('div');
        rowElement.classList.add('letterRow');
        for (let col = 0; col < globals.nCols; col++) {
            const ltr = getLetter(String.fromCharCode(col + 65), getColor(row, col));
            thisRow.push({ el: ltr });
            rowElement.appendChild(ltr);
        }
        letters.push(thisRow);
        container.appendChild(rowElement);
    }
};

const update = () => {
    const prevNCols = globals.nCols;
    const prevNRows = globals.nRows;
    setGlobals();
    if (globals.nCols === prevNCols && globals.nRows === prevNRows) { return; }
    fillLetters();
};

update();
window.onresize = update;
