import * as React from "react";
import {PossiblePalindrome} from "../entity/PossiblePalindrome";
import {InputForm} from "./InputForm";
import {HistoryItemList} from "./HistoryItemList";
import {possiblePalindromeFactory} from "../domain/PossiblePalindromeFactory";
import isPalindrome from "../../lib/palindromeChecker";

// import copy from 'copy-to-clipboard'; is not working. No typings for this module.
const copyToClipboard = require('copy-to-clipboard');

interface AppState{
    history:PossiblePalindrome[]
}

export class App extends React.Component<null, AppState>{

    constructor(props:any) {
        super(props);
        this.state = {
            history: []
        };
        const match = location.search.match(/\?palindrome=(.+)/);
        if (match) {
            const palindromeText = atob(match[1]);
            let checkResult = isPalindrome(palindromeText);
            this.state.history.push(possiblePalindromeFactory.build(palindromeText, checkResult));
        }
        this.addPalindrome = this.addPalindrome.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
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

    copyToClipboard(text:string){
        copyToClipboard('http://localhost:8080/?palindrome=' + btoa(text));
        alert('Link to this item was copied to the clipboard.');
    }

    render(){
        return (<div>
            <header><h1>Simple palindrome app</h1></header>
            <main>
                <article>
                    <h2>Test your sentence</h2>
                    <InputForm onSubmit={this.addPalindrome}/>
                    <p>These are the sentences you tried before:</p>
                    <HistoryItemList items={this.state.history} copyToClipboard={this.copyToClipboard}/>
                </article>
            </main>
        </div>)
    }
};
