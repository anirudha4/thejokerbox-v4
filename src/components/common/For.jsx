import React from 'react'

export default function For({ items, Parent, renderItem, ...props }) {
    const list = () => items.map((item, index) => ({...renderItem(item, index), key: index}))
    return (
        <Parent {...props}>
            {list()}
        </Parent>
    )
}
