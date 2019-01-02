import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TopNavigation from './components/TopNavigation';
import Welcome from './pages/Welcome';
import { curry } from './utils/helpers';
import AppTheme from './components/AppTheme';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
    };
  }

  render() {
    return (
      <Router>
        <AppTheme>

          <TopNavigation />
          <Welcome />

        </AppTheme>
      </Router>
    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};


const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawer: {
    width: 360,
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  bottomNavText: {
    fontSize: '1.25rem',
  },
};

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

export default curry(
  connect(mapStateToProps),
  withStyles(styles),
)(App);
