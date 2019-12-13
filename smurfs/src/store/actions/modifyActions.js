import axios from 'axios';

export const EDIT_SMURF = 'EDIT_SMURF';
export const CANCEL_EDIT = 'CANCEL_EDIT';

export const PUT_SMURF_START = 'PUT_SMURF_START';
export const PUT_SMURF_SUCCESS = 'PUT_SMURF_SUCCESS';
export const PUT_SMURF_FAILURE = 'PUT_SMURF_FAILURE';

export const editSmurf = smurf => dispatch => {
    dispatch({ type: EDIT_SMURF, payload: smurf });
};

export const cancelEdit = () => dispatch => {
    dispatch({ type: CANCEL_EDIT });
};

export const putSmurf = (smurfId, values) => dispatch => {
    dispatch({ type: PUT_SMURF_START });

    axios
        .put(`http://localhost:3333/smurfs/${smurfId}`, {...values, id: smurfId})
        .then(res => dispatch({ type: PUT_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: PUT_SMURF_FAILURE, payload: err.response }));
};