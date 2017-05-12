import * as React from 'react';
import {PossiblePalindrome} from "../entity/PossiblePalindrome";
import {HistoryItem} from "./HistoryItem";

interface HistoryItemListProps {
    items:PossiblePalindrome[];
}

export const HistoryItemList = (props:HistoryItemListProps) => {
    const items = props.items.map((item:PossiblePalindrome)=>{
        return <HistoryItem key={item.id} text={item.text} isPalindrome={item.isPalindrome}/>;
    });

    return (<ul data-component="history">{items}</ul>);
}