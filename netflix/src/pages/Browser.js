import React from 'react';
import { Datacontent } from '../hooks';
import { SelectionMapFilter } from  '../utilities';
import BrowserContainer from '../containers/Browser.js'

const Browser =()=> {
    const {series} = Datacontent('series');
    const {films} = Datacontent('films');
            const slides = SelectionMapFilter({series , films});
        
    return (
        <BrowserContainer slides={slides}/>);
 
}

export default Browser
