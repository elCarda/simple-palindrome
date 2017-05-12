import * as React from 'react';

interface HistoryItemProps {
    text:string;
    isPalindrome:boolean;
    copyToClipboard: (str: string) => void;
}

export const HistoryItem = (props: HistoryItemProps) => {
    const {text, isPalindrome, copyToClipboard} = props;
    this.onButtonClick = () => {
        copyToClipboard(text);
    };

    return (
        <li className="history-item">
            <span className="sentence">{text}</span>
            <span className={isPalindrome ? 'success' : 'error'}>{isPalindrome ? 'is a palindrome' : 'is not a palindrome'}</span>
            <button onClick={this.onButtonClick}>Copy</button>
        </li>)
};
