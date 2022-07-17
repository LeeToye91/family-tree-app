import React from 'react';
import { Outlet } from 'react-router-dom';
import AppLayout from '../AppLayout';

function AppRoute() {
	return <AppLayout>
		<Outlet />
	</AppLayout>
}

export default AppRoute;
