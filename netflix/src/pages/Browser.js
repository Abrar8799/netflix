import React from 'react';
import { Datacontent } from '../hooks';
function Browser() {
    const {series} = Datacontent('series');
    const {films} = Datacontent('films');
    console.log(series);
    console.log(films);
    return (
        <div>
        
        </div>
    )
}

export default Browser
