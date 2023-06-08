export function len(text) {
    if (text === '') return 0;
    if (typeof(text) !== 'string') throw Error ('argument must be type of string')
    for (var textLength = 0; typeof(text[textLength]) === 'string'; textLength +=1) {}return textLength;
}