export default function isPalindrome(str: string): boolean {
    let result = false;
    if (false === isString(str)) {
        throw new Error('Only string instance is supported as an input.');
    }
    if (str !== '') {
        const cleaned = str.replace(/\W/g, '');

        if (cleaned.length === 1) {
            result = true; //single char strings are always palindrome
        } else {
            const normalized = cleaned.toLocaleLowerCase();
            const reversed = normalized.split("").reverse().join('');

            result = normalized == reversed;
        }

    }
    return result;
}

function isString(str:any) {
    return typeof(str) == 'string' || str instanceof String;
}