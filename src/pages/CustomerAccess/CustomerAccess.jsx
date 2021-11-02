import React from "react";
import { useParams } from "react-router-dom";
import { AccountBox } from "../../components/AccountBox/AccountBox";

function CustomerAccess() {
    const { action } = useParams();


    return (
      <>
        <AccountBox initialActive={action}/>
      </>
    );
  }
  
  export default CustomerAccess;