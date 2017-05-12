import * as React from 'react';

// import copy from 'copy-to-clipboard'; No typings for this module
const copyToClipboard = require('copy-to-clipboard');


interface HistoryItemProps {
    text:string;
    isPalindrome:boolean;
}

export class HistoryItem extends React.PureComponent<HistoryItemProps, void> {
    input:HTMLInputElement;

    constructor(props:HistoryItemProps) {
        super(props);
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }
    copyToClipboard(){
        let input = this.props.text;
        copyToClipboard('http://localhost:8080/?palindrome=' + btoa(input));
        alert('Link to this item was copied to the clipboard.');
    }
    render(){
        const {text, isPalindrome} = this.props;

        return (<li> {text} {isPalindrome ? ' is palindrome' : 'is not palindrome'}<button onClick={this.copyToClipboard} >Copy</button></li>)
    }
}
