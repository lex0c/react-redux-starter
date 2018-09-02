import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as welcomeActionCreators from './welcome.actions';
import styles from './welcome.component.scss';

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="red fs-29 mt-3">React+Redux Starter</h1>
        <p data-balloon="Whats up!" data-balloon-pos="down">{this.props.message}</p>
        <input onChange={this.props.textUpdate} value={this.props.message}/>
      </div>
    );
  }

}

/**
 * Props validations.
 *
 */
WelcomeComponent.propTypes = {
  message: PropTypes.string,
  textUpdate: PropTypes.func
};

/** */
const mapStateToProps = (state) => ({
  message: state.welcomeReducer.message
});

/** */
const mapDispatchToProps = (dispatch) => (
  bindActionCreators(welcomeActionCreators, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(cssModules(WelcomeComponent, styles));
