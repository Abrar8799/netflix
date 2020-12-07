import React from 'react';
import { Datacontent } from '../hooks';
import { SelectionMapFilter } from  '../utilities'

function Browser() {
    const {series} = Datacontent('series');
    const {films} = Datacontent('films');
            const slides = SelectionMapFilter({series , films});
        
    return <BrowserContainer slides={slides}/>;
}

export default Browser
