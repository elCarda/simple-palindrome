import {PossiblePalindrome} from "../entity/PossiblePalindrome";
import {possiblePalindromeFactory} from "../domain/PossiblePalindromeFactory";
import isPalindrome from "./palindromeChecker";

export function fetchPalindromeFromUrl(url:string): PossiblePalindrome{
    const match = url.match(/\?palindrome=(.+)/);
    if (match) {
        const palindromeText = atob(match[1]);
        let checkResult = isPalindrome(palindromeText);

        return possiblePalindromeFactory.build(palindromeText, checkResult);
    }
}

/**
 * @todo Validates input. NotEmpty and baseUrl must not contain '?' if so '&' must be used as a glue.
 */
export function createLinkToPalindrome(text:string, baseUrl:string){
    return `${baseUrl}?palindrome=${btoa(text)}`;
}