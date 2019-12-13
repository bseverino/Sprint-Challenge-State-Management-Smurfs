import React from 'react';
import { connect } from 'react-redux';

import { editSmurf, cancelEdit, putSmurf } from '../../store/actions';

const SmurfCard = props => {
    return (
        <div>
            <h3>{props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <button onClick={() => props.editSmurf(props.smurf)}>Edit</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        inputValues: state.inputValues
    };
};

export default connect(
    mapStateToProps,
    { editSmurf, cancelEdit, putSmurf }
)(SmurfCard);