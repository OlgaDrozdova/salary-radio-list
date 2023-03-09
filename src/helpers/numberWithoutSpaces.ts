export const numberWithoutSpaces = (x: string): number => {
    const output = parseInt(x.replace(/\D/g, ''))
    return !output ? 0 : output;
}