
/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
    if (typeof (firstText) !== 'string' || typeof (secondText) !== 'string') throw Error('argument must be type of string');
    if (firstText.length !== secondText.length) return false;
    const cycleLength = firstText.length < secondText.length ? firstText.length : secondText.length;
        for (let i = 0; i < cycleLength; i += 1){
            if (firstText[i] !== secondText[i]) return false;
        }
    return true;
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
    if (typeof (firstText) !== 'string' || typeof (secondText) !== 'string') throw Error('argument must be type of string');
    if (firstText.length !== secondText.length) return true;
    const cycleLength = firstText.length < secondText.length ? firstText.length : secondText.length;
        for (let i = 0; i < cycleLength; i += 1){
            if (firstText[i] !== secondText[i]) return true;
        }
    return false;
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    if (typeof (firstText) !== 'string' || typeof (secondText) !== 'string') throw Error('argument must be type of string');
    const cycleLength = firstText.length < secondText.length ? firstText.length : secondText.length;
        for (let i = 0; i < cycleLength; i += 1){
            if (firstText[i] > secondText[i]) return true;
        }
    return false;
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
}
