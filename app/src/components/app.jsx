import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import * as actionCreators from './action-creator';

/*
 * Map the global state to global props here.
 *
 */
const mapStateToProps = (state) => ({
  messages: state.messages,
  errors: state.errors
});

/*
 * See: https://github.com/reduxjs/redux/blob/master/docs/api/bindActionCreators.md
 *
 */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    actionCreators,
    dispatch
  );
};

/*
 * Use connect both here and in your components.
 *
 */
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  (props) => (
    <div>{React.cloneElement(props.children, props)}</div>
  )
);

export default App;
