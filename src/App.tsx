import React from 'react';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
    <>
        <SignUp />
        {/* <Signin /> */}
        <GlobalStyles />
    </>
);

export default App;
