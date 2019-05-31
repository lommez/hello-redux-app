import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clickButton from '../store/actions/clickButton';

class SecondComponent extends Component {
    state = {
        inputValue: ''
    }

    inputChange = (event: any) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        const { clickButton, newValue } = (this.props as any);

        return (
            <div className="App" style={{ paddingTop: '10px' }}>
                <input
                    onChange={this.inputChange}
                    type='text'
                    value={this.state.inputValue}
                />
                <button onClick={() => clickButton(this.state.inputValue)}>
                    Click me!
                </button>
                <h1>{newValue}</h1>
            </div>
        );
    }
}

const mapStateToProps = (store: any) => {
    const obj = {
        newValue: store.clickState.newValue
    }

    return obj;
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SecondComponent);