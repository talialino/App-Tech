import React from 'react';

import './config/ReactotronConfig';

import { StatusBar } from 'react-native';
import Routes from './routes';

import { GitProvider } from './contexts/gitUser';

export default function App() {
    return (
        <GitProvider>
            <Routes />
            <StatusBar barStyle="light-content" backgroundColor="#E79F23" />
        </GitProvider>
    );
}
