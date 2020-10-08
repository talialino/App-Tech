import React from 'react';

import './config/ReactotronConfig';

import { StatusBar } from 'react-native';
import Routes from './routes';

export default function App() {
    return (
        <>
            <Routes />

            <StatusBar barStyle="light-content" backgroundColor="#E79F23" />
        </>
    );
}
