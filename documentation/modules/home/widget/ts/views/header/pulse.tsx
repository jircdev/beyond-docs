import * as React from 'react';

export function Pulse() {
    return (

        <div className="header__circle">
            <span style={{'--i': 1}}/>
            <span style={{'--i': 2}}/>
            <span style={{'--i': 3}}/>
            <span style={{'--i': 4}}/>
            <span style={{'--i': 5}}/>
        </div>

    )
}
