import * as React from 'react';
import {PossiblePalindrome} from "../entity/PossiblePalindrome";

interface HistoryItemListProps {
    items:PossiblePalindrome[];
}

export const HistoryItemList = (props:HistoryItemListProps) =>{
    const items = props.items.map((item:PossiblePalindrome)=>{
        return <li key={item.id}>{item.id}: {item.text}</li>;
    });

    return (<ul>{items}</ul>);
}