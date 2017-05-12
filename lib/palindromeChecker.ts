/**
 * Returns true if given string is a palindrome. Palindrome must follow rules
 *
 *   * extra characters like dots, comas and whitespaces are ignored during classification
 *   * empty string is not palindrome
 *   * sentence is readable in reverse order "aba ba c" <> "Cab aba"
 *   * classification is case insensitive
 *
 * Limitations:
 * @todo Unicode is not fully supported yet!
 *
 * @param {string|String} str Input string
 * @returns {boolean} True if input string follows the rules and is a palindrome
 */
export default function isPalindrome(str: string): boolean {
    let result = false;
    if (false === isString(str)) {
        throw new Error('Only string instance is supported as an input.');
    }
    if (str !== '') {
        const cleaned = str.replace(/\W/g, '');

        if (cleaned.length === 1) {
            result = true; //single char strings are always palindrome
        } else if (cleaned.length > 1) {
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