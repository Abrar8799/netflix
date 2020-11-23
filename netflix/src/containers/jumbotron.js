import React from 'react';
import bumboat from '../fixture/jumbo';
import { Jumbotron } from '../comp';

export function JumbotronContainer (){
  return ( 
<div className="App">

      <Jumbotron.Container>

          {bumboat.map((item)=> (
 <Jumbotron key={item.id} direction={item.direction}>
                <Jumbotron.Pane>
                          <Jumbotron.Title>{item.title}</Jumbotron.Title>
                          <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                          <Jumbotron.Image src={item.image} alt={item.alt}/>
                </Jumbotron.Pane>

</Jumbotron>
            ))}
            
      </Jumbotron.Container>
    
    </div>

  )
}

