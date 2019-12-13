import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    HANDLE_NAME,
    HANDLE_AGE,
    HANDLE_HEIGHT,
    HANDLE_SUBMIT,
    POST_SUCCESS,
    POST_FAILURE
} from '../actions';

const initialState = {
    smurfs: null,
    isFetching: false,
    error: '',
    inputValues: {
        name: '',
        age: 0,
        height: 0
    }
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
                    height: action.payload
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
                    ...state.inputValues,
                    name: '',
                    age: 0,
                    height: 0
                }
            };
        case POST_SUCCESS:
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