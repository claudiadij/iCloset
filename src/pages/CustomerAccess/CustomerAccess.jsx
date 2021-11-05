import React from "react";
import { useParams } from "react-router-dom";
import { AccountBox } from "../../components/AccountBox/AccountBox";
import NavbarBefore from "../../components/Navbar/NavbarBeforeLogin";
import { AuthProvider } from "../../contexts/AuthContexts";

function CustomerAccess() {
    const { action } = useParams();

    return (
      <>
        <AuthProvider>
          <NavbarBefore />
          <AccountBox initialActive={action}/>
        </AuthProvider>
      </>
    );
  }
  
  export default CustomerAccess;