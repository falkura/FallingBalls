export function getRandomNumber(min: number, max: number) : any {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function getRandomColor() : any {
    return "0x" + Math.floor(Math.random()*16777215).toString(16);
};

