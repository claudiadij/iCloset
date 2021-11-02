import React, { useState } from "react";
import { AccountContext } from "./accountContext";
import { SignupForm } from "../../pages/CustomerAccess/SignUp/Data";
import { LoginForm } from "../../pages/CustomerAccess/Login/Data";
import { 
    AppContainer,
    BoxContainer,
    TopContainer,
    BackDrop,
    HeaderContainer,
    HeaderText,
    SmallText,
    InnerContainer,
    backdropVariants,
    expandingTransition
} from "./AccountBox.elements";

export function AccountBox(props) {
    const { initialActive } = props;
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState(initialActive ? initialActive: "signin");
  
    const playExpandingAnimation = () => {
      setExpanded(true);
      setTimeout(() => {
        setExpanded(false);
      }, expandingTransition.duration * 1000 - 1500);
    };
  
    const switchToSignup = () => {
      playExpandingAnimation();
      setTimeout(() => {
        setActive("signup");
      }, 400);
    };
  
    const switchToSignin = () => {
      playExpandingAnimation();
      setTimeout(() => {
        setActive("signin");
      }, 400);
    };
  
    const contextValue = { switchToSignup, switchToSignin };
  
    return (
      <AccountContext.Provider value={contextValue}>
          <AppContainer>
            <BoxContainer>
            <TopContainer>
                <BackDrop
                initial={false}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={backdropVariants}
                transition={expandingTransition}
                />
                {active === "signin" && (
                <HeaderContainer>
                    <HeaderText>Welcome</HeaderText>
                    <HeaderText>Back</HeaderText>
                    <SmallText>Please sign-in to continue!</SmallText>
                </HeaderContainer>
                )}
                {active === "signup" && (
                <HeaderContainer>
                    <HeaderText>Create</HeaderText>
                    <HeaderText>Account</HeaderText>
                    <SmallText>Please sign-up to continue!</SmallText>
                </HeaderContainer>
                )}
            </TopContainer>
            <InnerContainer>
                {active === "signin" && <LoginForm />}
                {active === "signup" && <SignupForm />}
            </InnerContainer>
            </BoxContainer>
          </AppContainer>
      </AccountContext.Provider>
    );
  }

export default AccountBox