import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ tittle, icon }) => {
  return <div className='navbar bg-primary'></div>;
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fad fa-id-card-alt',
};

export default Navbar;
