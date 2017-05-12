import * as React from "react";
import {PossiblePalindrome} from "../entity/PossiblePalindrome";
import {InputForm} from "./InputForm";
import {HistoryItemList} from "./HistoryItemList";
import {possiblePalindromeFactory} from "../domain/PossiblePalindromeFactory";
import isPalindrome from "../../lib/palindromeChecker";

interface AppState{
    history:PossiblePalindrome[]
}

export class App extends React.Component<null, AppState>{

    constructor(props:any) {
        super(props);
        this.state = {
            history: []
        };
        this.addPalindrome = this.addPalindrome.bind(this);
        const match = location.search.match(/\?palindrome=(.+)/);
        if (match) {
            const palindromeText = atob(match[1]);
            let checkResult = isPalindrome(palindromeText);
            this.state.history.push(possiblePalindromeFactory.build(palindromeText, checkResult));
        }
    }

    addPalindrome(input:string){
        try {
            let checkResult = isPalindrome(input);
            const newItem = possiblePalindromeFactory.build(input, checkResult);
            this.setState({
                history: [
                    newItem,
                    ...this.state.history.slice(0,9)
                ]
            })
        } catch(e) {
            console.error(e);
            alert('Input is not a valid string. Try again please.');
        }
    }

    render(){
        return (<div>
            <header><h1>Simple palindrome app</h1></header>
            <main>
                <article>
                    <h2>Test your sentence</h2>
                    <InputForm onSubmit={this.addPalindrome}/>
                    <p>These are the sentences you tried before:</p>
                    <HistoryItemList items={this.state.history} />
                </article>
            </main>
        </div>)
    }
};
