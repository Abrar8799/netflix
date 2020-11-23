import React from 'react';
import { Frequently } from './containers/faq'
import { FooterContainer } from './containers/footer'
import { JumbotronContainer } from './containers/jumbotron';


export default function App(){

  return (
    <>

    <div>
      <Frequently/>
<JumbotronContainer/>
 <FooterContainer/>
    </div>
    </>

  )
}