import React from 'react';
import store from '@contexts/store';

export function withContext(Component) {
    return function WrapperComponent(props) {
        const values = {}
        Object.keys(store).forEach(ctx => values[ctx] = store[ctx]())
        const updatedProps = {
            ...props,
            ...values
        }
        return (
            <Component {...updatedProps}></Component>
        );
    };
}