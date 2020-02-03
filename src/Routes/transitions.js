import React from 'react';
import { Transition } from 'react-native-reanimated';

export function authTransition() {
    return (
        <Transition.Together>
            <Transition.Out
                type="slide-top"
                durationMs={500}
                interpolation="easeIn"
            />
            <Transition.In
                type="slide-bottom"
                durationMs={500}
                interpolation="easeIn"
            />
        </Transition.Together>
    );
}
