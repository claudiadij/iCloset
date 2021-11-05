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
    ComSubmitButton, 
    FieldContainer,
} from "../../../components/AccountBox/AccountBox.elements";

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/add-item")
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }

    return (
            <ComBoxContainer>
                {error && <Alert variant="danger">{error}</Alert>}
                <ComFormContainer onSubmit={handleSubmit} >
                    <FieldContainer>
                        <ComInput 
                        type="email" 
                        placeholder="Email"
                        ref={emailRef}
                        required
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <ComInput 
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        ref={passwordRef}
                        required
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <ComInput 
                        name="confirmPassword" 
                        type="password" 
                        placeholder="Confirm Password" 
                        ref={confirmPasswordRef}
                        required
                        />
                    </FieldContainer>
                <Marginer direction="vertical" margin={10} />
                <Marginer direction="vertical" margin="1.6em" />    
                <ComSubmitButton disabled={loading} type="submit">Register</ComSubmitButton>
                </ComFormContainer>
                <Marginer direction="vertical" margin="1em" />
                <ComMutedLink href="#" onClick={switchToSignin}>
                    Already have an account? 
                    <ComBoldLink>Login</ComBoldLink>
                </ComMutedLink>
                <Marginer direction="vertical" margin="1em" />
            </ComBoxContainer>
       
    );
}