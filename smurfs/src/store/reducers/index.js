import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    HANDLE_NAME,
    HANDLE_AGE,
    HANDLE_HEIGHT,
    HANDLE_SUBMIT,
    POST_SUCCESS,
    POST_FAILURE,
    EDIT_SMURF,
    CANCEL_EDIT,
    PUT_SMURF_START,
    PUT_SMURF_SUCCESS,
    PUT_SMURF_FAILURE
} from '../actions';

const initialState = {
    smurfs: null,
    isFetching: false,
    isEditing: false,
    error: '',
    inputValues: {
        name: '',
        age: 0,
        height: 0,
        heightValue: 0
    },
    heldId: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case HANDLE_NAME:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    name: action.payload
                }
            };
        case HANDLE_AGE:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    age: action.payload
                }
            };
        case HANDLE_HEIGHT:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    height: `${action.payload}cm`,
                    heightValue: action.payload
                }
            };
        case HANDLE_SUBMIT:
            return {
                ...state,
                isFetching: true
            };
        case POST_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                inputValues: {
                    name: '',
                    age: 0,
                    height: 0,
                    heightValue: 0
                },
                error: ''
            };
        case POST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case EDIT_SMURF:
            return {
                ...state,
                isEditing: true,
                inputValues: action.payload,
                heldId: action.payload.id
            };
        case CANCEL_EDIT:
            return {
                ...state,
                isEditing: false,
                inputValues: {
                    name: '',
                    age: 0,
                    height: 0,
                    heightValue: 0
                },
                heldId: null
            };
        case PUT_SMURF_START:
            return {
                ...state,
                isFetching: true
            };
        case PUT_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                isEditing: false,
                inputValues: {
                    name: '',
                    age: 0,
                    height: 0,
                    heightValue: 0
                },
                heldId: null,
                error: ''
            };
        case PUT_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default reducer;