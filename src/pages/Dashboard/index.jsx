import React from 'react'
import withGaurd from '@components/hoc/withGaurd';
import { withContext } from '@components/hoc';
import Component from '@components/Dashboard'
function Dashboard() {
    return (
        <Component />
    )
}

const ProtectedComponent = withContext(Dashboard);
export default withGaurd(ProtectedComponent);