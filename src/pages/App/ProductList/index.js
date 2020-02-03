import React from 'react';

import View from './view';

export default function Model() {
    const viewProps = {
        data: [
            {
                request: {
                    id: 1,
                },
                product: {
                    name: 'Boné',
                    availableQuantity: 12,
                    totalQuantity: 24,
                },
            },
        ],
    };
    return <View viewProps={viewProps} />;
}
