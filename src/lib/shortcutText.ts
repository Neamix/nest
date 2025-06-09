export function shortcutText(value:string | undefined,length:number,shortcutLength:number,dotsNumber:number = 3) {
    if (!value) return '';

    if (value.length <= length) return value;
    let shortCutting = value.substr(0,shortcutLength);

    return `${shortCutting}${".".repeat(dotsNumber)}`
}