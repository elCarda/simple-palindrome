import {PossiblePalindrome} from "../entity/PossiblePalindrome";
class PossiblePalindromeFactory {
    private index:number = 1;
    build(str:string, isPalindrome:boolean):PossiblePalindrome{
        return new PossiblePalindrome(this.index++, str, isPalindrome);
    }
}

export const possiblePalindromeFactory = new PossiblePalindromeFactory();