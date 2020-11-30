import React from 'react';
import { Container ,Base , Error, Title , Text , TextSmall , Input ,Submit ,Link } from './style/singstyle';

function SignForm({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}



export default SignForm;

SignForm.Base = function SignFormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

SignForm.Error = function SignFormError({ children, ...restProps }) {
    return (<Error {...restProps}>{children}</Error>)
}

SignForm.Link = function SignFormLink({ children, ...restProps }) {
    return (<Link {...restProps}>{children}</Link>)
}

SignForm.Title = function SignFormTitle({ children, ...restProps }) {
    return (<Title {...restProps}>{children}</Title>)
}

SignForm.Text = function SignFormText({ children, ...restProps }) {
    return (<Text {...restProps}>{children}</Text>)
}


SignForm.TextSmall = function SignFormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>
}

SignForm.Input = function SignFormInput({ children, ...restProps }) {
    return <Input {...restProps}/>
}

    SignForm.Submit = function SignFormSubmit({ children, ...restProps }) {
        return <Submit {...restProps}>{children}</Submit>
    }

