import React, { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

import { useSelector } from 'react-redux';

import createRouter from './Routes/routes';

export default function App() {
    const signed = useSelector(state => state.auth.signed);
    const profile = useSelector(state => state.user.profile);
    const personality = profile ? profile.personality : null;

    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state =>
            setIsConnected(state.isConnected)
        );

        return () => unsubscribe();
    }, [isConnected]);

    const Routes = createRouter(signed, personality, isConnected);

    return <Routes />;
}
