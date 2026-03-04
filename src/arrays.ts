/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        const empty: number[] = [];
        return empty;
    } else if (numbers.length === 1) {
        const first: number[] = [numbers[0]];
        const endlist: number[] = [numbers[0], ...first];
        return endlist;
    } else {
        const first: number[] = [numbers[0]];
        const endlist: number[] = [...first, numbers[numbers.length - 1]];
        return endlist;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numberr: number): number => numberr * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const conv1: string[] = numbers.map((stringg: string): string =>
        Number.isNaN(parseInt(stringg)) ? (stringg = "0") : stringg,
    );
    const integers: number[] = conv1.map((stringg: string): number =>
        parseInt(stringg),
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removedDollars = amounts.map((stringg: string): string =>
        stringg[0] === "$" ? stringg.replace(/\$/g, "") : stringg,
    );
    const conv2: string[] = removedDollars.map((stringg: string): string =>
        Number.isNaN(parseInt(stringg)) ? (stringg = "0") : stringg,
    );
    const final: number[] = conv2.map((stringg: string): number =>
        parseInt(stringg),
    );
    return final;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestion = messages.filter(
        (stringg: string): boolean => stringg[stringg.length - 1] !== "?",
    );
    const scream = noQuestion.map((stringg: string): string =>
        stringg[stringg.length - 1] === "!" ? stringg.toUpperCase() : stringg,
    );
    return scream;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const filtered = words.filter(
        (stringg: string): boolean => stringg.length < 4,
    );
    return filtered.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const filtered = colors.filter(
        (color: string): boolean =>
            color !== "red" && color !== "blue" && color !== "green",
    );
    if (filtered.length > 0) {
        return false;
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    /*
    const stringed = addends.map((ends: number): string =>
    "+"+ends.toString(),
    );
    stringed[0].replace(/\+/g, ""); */

    const conjoined = addends.join("+");
    let fProduct: string = sum.toString() + "=" + conjoined;
    if (fProduct === "0=") {
        fProduct = "0=0"; //the most ingenious solution
    }
    return fProduct;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const sum = values.reduce((total: number, num: number) => total + num, 0);
    const negatives = values.filter((numberr: number): boolean => numberr < 0);
    const nValues = [...values];

    if (negatives.length === 0) {
        nValues.push(sum);
        return nValues;
    } else {
        //nValues.splice(nValues.indexOf(negatives[0]), 0, sum);
        const beforeNegative = nValues.filter(
            (numberr: number): boolean =>
                nValues.indexOf(numberr) < nValues.indexOf(negatives[0]),
        );
        const otherSum = beforeNegative.reduce(
            (total: number, num: number) => total + num,
            0,
        );
        nValues.splice(nValues.indexOf(negatives[0]) + 1, 0, otherSum);
        return nValues;
    }
}
