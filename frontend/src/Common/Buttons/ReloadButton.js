import React from 'react';
import PropTypes from 'prop-types';

const reload_symbol = String.fromCharCode( 8635);
const ReloadButton = (props) => (
  <button type="button" onClick={props.onClick} title={props.title} >
    {reload_symbol}
  </button>
);
ReloadButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default ReloadButton;
