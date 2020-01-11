import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import authSelectors from '../redux/auth/authSelectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const Appar = ({ isAuthenticated }) => (
  <header style={styles.header}>
    <Navigation />
    {isAuthenticated && <UserMenu />}
    {/* <UserMenu
      name="Mango"
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZJnjflGyRo9k1SSxDDhxt3rNEFJQlVgzknWOsciD2ylwFpNfGw&s"
    /> */}
  </header>
);

const mapStateToPtops = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToPtops)(Appar);
