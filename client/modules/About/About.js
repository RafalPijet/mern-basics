import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <div>
        <h2>This is a about module</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
