import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';

import AppProvider from './hooks';
import CustomRoutes from './routes/index';

const App: React.FC = () => (
    <BrowserRouter>
        <AppProvider>
            <CustomRoutes />
        </AppProvider>
        <GlobalStyles />
    </BrowserRouter>
);

export default App;
