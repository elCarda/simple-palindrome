import isPalindrome from "../../../lib/palindromeChecker";

describe("PalindromeChecker", function () {
    describe("[against edge cases]", ()=>{
        it("Empty string is not palindrome", function () {
            expect(isPalindrome('')).toBeFalsy();
        });
        it("Object is not palindrome", function () {
            function call(){
                const input = <string>JSON.parse('{}');
                isPalindrome(input);
            }
            expect(call).toThrowError();
        });
        it("String created as object is supported input.", ()=>{
            expect(isPalindrome(<string>new String('aaaa'))).toBeTruthy();
        });
        it("Single char is always palindrome", ()=>{
            expect('a').toBeTruthy();
        });
        it("String that contains only special chars like \"{}/*/*---**/\" is not a palindrome.", ()=>{
            expect(isPalindrome('{}/*/*---**/')).toBeFalsy();
        });
    });

    describe("[against data set]", () => {
        const testDataSet = [
            'Mr. Owl ate my metal worm',
            'Was it a cat I saw?',
            'Go hang a salami, I\'m a lasagna hog',
            'A man, a plan, a canal, Panama!',
            'Was it a car or a cat I saw?',
            'No \'x\' in Nixon',
            'Madam, I\'m Adam',
            'Poor Dan is in a droop'
        ];

        testDataSet.forEach((testPhrase) => {
            it(`should "${testPhrase}" mark as a palindrome.`, () => {
                expect(isPalindrome(testPhrase)).toBeTruthy();
            })
        })
    });
});