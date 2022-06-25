import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Sidebar from '../Sidebar';

// The actual layout file
function AppLayout({ children }) {
  return (
    <main>
      <div>
        <Link to="/dashboard">Home</Link>
        {/* <Sidebar userData={userData} /> */}
      </div>
      <div className="min-w-fit ml-40 px-4">
        {children}
      </div>

    </main>
  );
}

AppLayout.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node.isRequired,
};

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node,
//   userData: PropTypes.object.isRequired,
};

AppLayout.defaultProps = {
  children: null,
};
