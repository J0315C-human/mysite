export const getLetter = (letter: string, color: string) => {
    const d: HTMLElement = document.createElement('div');
    d.classList.add('letter');
    d.textContent = letter;
    d.style.color = color;
    return d;
};

export const getRow = () => {
    const r: HTMLElement = document.createElement('div');
    r.classList.add('letterRow');
    return r;
};
