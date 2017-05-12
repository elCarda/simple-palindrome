import * as React from 'react';
import {PossiblePalindrome} from "../entity/PossiblePalindrome";
import {HistoryItem} from "./HistoryItem";

interface HistoryItemListProps {
    items:PossiblePalindrome[];
    copyToClipboard:(str:string)=>void;
}

export const HistoryItemList = (props:HistoryItemListProps) => {
    const itemElements = props.items.map((item:PossiblePalindrome) =>
        <HistoryItem key={item.id} text={item.text} isPalindrome={item.isPalindrome} copyToClipboard={props.copyToClipboard}/>
    );

    return (<ul data-component="history">{itemElements}</ul>);
}