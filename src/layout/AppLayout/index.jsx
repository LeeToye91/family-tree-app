import React from 'react';
import Sidebar from '../../components/SideBar';
import PropTypes from 'prop-types';
import './AppLayout.scss';

// The actual layout file
function AppLayout({ children }) {
	return (
		<main>
			<div className="app-container d-flex">
				<Sidebar />
				<div className="content-container">
					{children}
				</div>
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
