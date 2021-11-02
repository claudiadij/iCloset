import React, { useContext } from "react";
import { Marginer } from "../../../components/Marginer/Marginer";
import { AccountContext } from "../../../components/AccountBox/accountContext";
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

    return (
        <ComBoxContainer>
            <ComFormContainer>
                <ComInput type="email" placeholder="Email" />
                <ComInput type="password" placeholder="Password" />
            </ComFormContainer>
            <Marginer direction="vertical" margin={10} />
            <ComMutedLink href="#">Forgot your password?</ComMutedLink>
            <Marginer direction="vertical" margin="1.6em" />    
            <ComSubmitButton type="submit">Login</ComSubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <ComMutedLink href="#" onClick={switchToSignup}>Don't have an account? <ComBoldLink>Sign up</ComBoldLink></ComMutedLink>
        </ComBoxContainer>
    );
}
