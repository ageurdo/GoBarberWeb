import React from 'react';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyles from './styles/global';

import ToastContainer from './components/ToastContainer';
import AppProvider from './hooks';

const App: React.FC = () => (
    <>
        <AppProvider>
            <Signin />
        </AppProvider>
        <GlobalStyles />
    </>
);

export default App;
