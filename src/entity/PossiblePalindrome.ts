export class PossiblePalindrome{
    private _id:number;
    private _isPalindrome:boolean;
    private _text:string;

    constructor(id:number, text: string, isPalindrome: boolean) {
        this._id = id;
        this._isPalindrome = isPalindrome;
        this._text = text;
    }

    get id(): number {
        return this._id;
    }

    get isPalindrome(): boolean {
        return this._isPalindrome;
    }

    get text(): string {
        return this._text;
    }

}