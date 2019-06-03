import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clickButton from '../store/actions/clickButton';

class ThirdComponent extends Component {
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
            <div>                
                <h2>New value from Redux: {newValue}</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(ThirdComponent);