import * as React from "react";
import {PossiblePalindrome} from "../entity/PossiblePalindrome";
import {InputForm} from "./InputForm";
import {HistoryItemList} from "./HistoryItemList";
import {possiblePalindromeFactory} from "../domain/PossiblePalindromeFactory";
import isPalindrome from "../service/palindromeChecker";
import {fetchPalindromeFromUrl} from "../service/locationService";
import {createLinkToPalindrome} from "../service/locationService";

// import copy from 'copy-to-clipboard'; is not working. No typings for this module.
const copyToClipboard = require('copy-to-clipboard');

interface AppState{
    history:PossiblePalindrome[]
}

export class App extends React.Component<null, AppState>{

    constructor(props:any) {
        super(props);
        this.addPalindrome = this.addPalindrome.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
        this.state = {
            history: []
        };
        try {
            const palindromeFromUrl = fetchPalindromeFromUrl(location.search);
            if (palindromeFromUrl) {
                this.state.history.push(palindromeFromUrl);
            }
        } catch (e) {
            console.error(e);
            alert('Url is broken!');
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
            alert('Input is not a valid string. Try another please.');
        }
    }

    copyToClipboard(text: string) {
        try {
            //@todo Location.origin should be safe for latest Chrome and IE 11 but what about others
            copyToClipboard(createLinkToPalindrome(text, location.origin));
            alert('Link to this item was copied to the clipboard.');
        } catch (e) {
            console.error(e);
            alert('Link cannot be copied to the clipboard.');
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
                    <HistoryItemList items={this.state.history} copyToClipboard={this.copyToClipboard}/>
                </article>
            </main>
        </div>)
    }
}
