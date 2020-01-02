import React from 'react';
import { connect } from 'react-redux';

import { handleName, handleAge, handleHeight, handleSubmit, putSmurf, cancelEdit } from '../store/actions';

const AddForm = props => {
    return (
        <form onSubmit={e => {
                e.preventDefault();
                props.isEditing ? props.putSmurf(props.heldId, props.inputValues) : props.handleSubmit(props.inputValues);
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
                    value={props.inputValues.heightValue}
                    onChange={props.handleHeight}
                />
            </label>
            <button>{props.isEditing ? 'Edit Smurf' : 'Add Smurf'}</button>
            {props.isEditing && <button onClick={props.cancelEdit}>Cancel</button>}
        </form>
    );
};

const mapStateToProps = state => {
    return {
        isEditing: state.isEditing,
        inputValues: state.inputValues,
        heldId: state.heldId
    };
};

export default connect(
    mapStateToProps,
    { handleName, handleAge, handleHeight, handleSubmit, putSmurf, cancelEdit }
)(AddForm);