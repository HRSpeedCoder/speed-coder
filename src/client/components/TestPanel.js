import React from 'react';


class TestPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // for now, get the tests for the only toy problem in our database
    // add test suite to state as an array
  }

  render() {
    return (<div>tests</div>);
  }
}

export default TestPanel;
