import React, { Children } from 'react';
import { Container , Title ,List , User , Picture , Name} from './style/Profilestyle.js'

const Profile =({children , ...restProps})=> {
    return <Container {...restProps}>{children}</Container>
}
export default Profile;

Profile.Title = function ProfileTitle({children , ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Profile.List = function ProfileList({children , ...restProps}) {
    return <List {...restProps}>{children}</List>
}

Profile.User = function ProfileUser({children , ...restProps}) {
    return <User {...restProps}>{children}</User>
}

Profile.Picture = function ProfilePicture({src , ...restProps}) {
    return <Picture {...restProps} src={src ? './image/users/${src}.jpg'} :'/image/loading-image/loading' />
}

