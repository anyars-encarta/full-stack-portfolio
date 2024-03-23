import React from 'react'
import { navItems } from '../constants/items';

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {navItems.map((navItem, index) =>
                <a
                    href={`#${navItem.id}`}
                    key={navItem.id + index}
                    className='app__navigation-dot'
                    style={ active === navItem.id ? { backgroundColor: '#313BAC'} : { }}
                />
            )}
        </div>
    )
}

export default NavigationDots