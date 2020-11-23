import React from 'react';
import { Container, Row , Column ,Link ,Title , Text , Break} from './style/footerstyle';

export default function Footer({ children , ...restProps  }) {

   return ( <Container {...restProps} >  {children} </Container>)
}

Footer.Row=function footerRow({children ,...restProps}){
    return <Row >{children}</Row>
}

Footer.Column =function footerColumn({children,...restProps}){
    return <Column >{children}</Column>
}

Footer.Link =function footerLink({children,...restProps}){
    return <Link>{children}</Link>
}

Footer.Title =function footerTitle({children,...restProps}){
    return <Title >{children}</Title>
}

Footer.Text=function footerText({children,...restProps}){
    return <Text >{children}</Text>
}

Footer.Break=function footerBreak({children ,...restProps}){
    return <Break > {children}</Break>
}


