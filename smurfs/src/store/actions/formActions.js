import axios from "axios";

export const HANDLE_NAME = 'HANDLE_NAME';
export const HANDLE_AGE = 'HANDLE_AGE';
export const HANDLE_HEIGHT = 'HANDLE_HEIGHT';

export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const handleName = e => {
    return { type: HANDLE_NAME, payload: e.target.value }
}

export const handleAge = e => {
    return { type: HANDLE_AGE, payload: e.target.value }
}

export const handleHeight = e => {
    return { type: HANDLE_HEIGHT, payload: e.target.value }
}

export const handleSubmit = (data) => dispatch => {
    dispatch({ type: HANDLE_SUBMIT });
    const newSmurf = {...data, id: Date.now()};

    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {            
            dispatch({ type: POST_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: POST_FAILURE, payload: err.response });
        });
};