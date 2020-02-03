import React from 'react';
import View from './view';

export default function Model({ navigation }) {
    const animationEnd = () => {
        navigation.navigate('SignIn');
    };

    return <View animationEnd={animationEnd} />;
}
