import React, { useContext, useRef, useState } from "react";
import { Alert } from "../../../components/AccountBox/AccountBox.elements";
import { Marginer } from "../../../components/Marginer/Marginer";
import { AccountContext } from "../../../components/AccountBox/accountContext";
import { useAuth } from "../../../contexts/AuthContexts";
import { useHistory } from "react-router";
import { 
    ComBoldLink,
    ComBoxContainer, 
    ComFormContainer, 
    ComInput, 
    ComMutedLink, 
    ComSubmitButton 
} from "../../../components/AccountBox/AccountBox.elements";


export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext);

    const emailRef = useRef()
    const passwordRef = useRef()
    const { signin } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value)
            history.push("/add-item")
        } catch {
            setError('Failed to sign in')
        }

        setLoading(false)
    }

    return (
        <ComBoxContainer>
            {error && <Alert variant="danger">{error}</Alert>}
            <ComFormContainer onSubmit={handleSubmit}>
                <ComInput 
                type="email" 
                placeholder="Email" 
                ref={emailRef}
                required
                />
                <ComInput 
                type="password" 
                placeholder="Password" 
                ref={passwordRef}
                required
                />
                <Marginer direction="vertical" margin={10} />
                <Marginer direction="vertical" margin="1.6em" />
                <ComSubmitButton type="submit">Login</ComSubmitButton> 
            </ComFormContainer>
            <Marginer direction="vertical" margin="1.6em" />
            <ComMutedLink href="#">Forgot your password?</ComMutedLink>
            <Marginer direction="vertical" margin="1em" />
            <ComMutedLink href="#" onClick={switchToSignup}>Don't have an account? <ComBoldLink>Sign up</ComBoldLink></ComMutedLink>
        </ComBoxContainer>
    );
}
