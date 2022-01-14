import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

import RequireAuth from './RequireAuth';
import Signin from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const CustomRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
            path="/dashboard"
            element={
                <RequireAuth>
                    <Dashboard />
                </RequireAuth>
            }
        />
    </Routes>
);

export default CustomRoutes;
