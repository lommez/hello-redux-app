import React, { MouseEvent } from "react";

interface IProps {
    value: string;
};

interface IInputState {
    inputValue: string
}

class FirstComponent extends React.Component<IProps, IInputState>{
    constructor(props: IProps) {
        super(props);
    }

    state = {
        inputValue: ''
    }

    componentDidMount() {
        let inputValue: IInputState = { inputValue: 'value' };
        this.setState(inputValue);
    }

    private inputChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ inputValue: event.target.value });
        console.log(event.target.value);
    }

    private showProps(event: MouseEvent) {
        event.preventDefault();
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={(e) => this.inputChange(e)} />
                <button onClick={(e) => this.showProps(e)}>
                    Show Props
                </button>
                <button onClick={(e) => alert(this.state.inputValue)}>
                    Show Value
                </button>
                <h1>{this.props.value}</h1>
            </div >
        )
    }
}

export default FirstComponent;