import * as React from "react";
import {PossiblePalindrome} from "../entity/PossiblePalindrome";
import {InputForm} from "./InputForm";
import {HistoryItemList} from "./HistoryItemList";
import {possiblePalindromeFactory} from "../domain/PossiblePalindromeFactory";

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
    }

    addPalindrome(input:string){
        //@todo Validate if it is a palindrome or not
        const newItem = possiblePalindromeFactory.build(input, false);
        this.setState({
            history: [
                newItem,
                ...this.state.history.slice(0,9)
            ]
        })
    }

    render(){
        return (<div>
            <header>Simple palindrome app</header>
            <main>
                <article>
                    <h1>My article</h1>
                    <InputForm onSubmit={this.addPalindrome}/>
                    <p>{this.state.history.length} These are the sentences you tried before:</p>
                    <ul>
                        <li><span>Example 1</span><a href="javascript:void(0);">Copy link</a></li>
                        <li>Example 2</li>
                    </ul>
                    <HistoryItemList items={this.state.history} />
                </article>
            </main>
        </div>)
    }
};
