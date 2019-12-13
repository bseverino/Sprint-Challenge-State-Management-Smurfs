import React from 'react';
import { connect } from 'react-redux';

import { handleName, handleAge, handleHeight, handleSubmit } from '../store/actions';

const AddForm = props => {
    return (
        <form onSubmit={e => {
                e.preventDefault();
                props.handleSubmit(props.inputValues);
            }}>
            <label>
                Name:
                <input
                    type='text'
                    value={props.inputValues.name}
                    onChange={props.handleName}
                />
            </label>
            <label>
                Age:
                <input
                    type='number'
                    value={props.inputValues.age}
                    onChange={props.handleAge}
                />
            </label>
            <label>
                Height:
                <input
                    type='number'
                    value={props.inputValues.height}
                    onChange={props.handleHeight}
                />
            </label>
            <button>Add Smurf</button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        inputValues: state.inputValues
    };
};

export default connect(
    mapStateToProps,
    { handleName, handleAge, handleHeight, handleSubmit }
)(AddForm);