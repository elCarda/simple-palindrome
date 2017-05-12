import * as React from 'react';

interface InputFormProps {
    onSubmit:(str:string)=>any;
}
export class InputForm extends React.PureComponent<InputFormProps, void> {
    input:HTMLInputElement;

    constructor(props:InputFormProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event:React.SyntheticEvent<any>){
        event.preventDefault();

        this.props.onSubmit(this.input.value);
    }

    render(){
        return (<form onSubmit={this.onSubmit}>
            <input data-component="new-palindrome-input" type="text" placeholder="Enter new palindrome..."  ref={(input)=>{this.input = input}}/>
            <input data-component="new-palindrome-submit" type="submit"/>
        </form>)
    }
}

