import React, { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //easy code
    // if (authStatus === true) {
    //   navigate("/login");
    // } else if (authStatus === false) {
    //     navigate('/')
    // }
    //below code is bit tricky if u don't uderstand its same as the above code
    if (authentication && authStatus !== authentication) {
      //true && true !== true => true && true => navigate to login page because user is not authenticated
      //authentication is always true && if authstatus is false then user is ...
      //...not authenticated navigate to login page
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      //!true && true !== true => false && false => true navigate to home
      //authentication is always true && if authstatus is true that means user is ...
      //... authenticated then navigate to home page
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected;
