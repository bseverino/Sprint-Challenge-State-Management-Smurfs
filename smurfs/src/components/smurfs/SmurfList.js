import React from 'react';
import { connect } from 'react-redux';

import SmurfCard from './SmurfCard';

const SmurfList = props => {
    return (
        <div>
            {props.isFetching && <p>Loading...</p>}
            {props.smurfs && props.smurfs.map(smurf => (
                    <SmurfCard key={smurf.id} smurf={smurf} />
                ))
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect (
    mapStateToProps,
    {}
)(SmurfList);